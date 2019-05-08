**Prerequisites**
- Endpoint from your bucket: Properties > Static website hosting
- A certificate that covers your domains (TODO add link to page)

- Go to the 'cloudFront Distributions' page
- Click 'Create Distribution'
- Under 'Web' click 'Get Started'

Fill out the fields as follows (fields not mentioned stay as is)

*Origin Settings*
- Origin Domain Name: http://trivalleycoders.org.s3-website-us-west-2.amazonaws.com
  - The endpoint from above
  - The Origin ID will auto-fill

*Default Cache Behavior Settings*
- Viewer Protocol Policy: Redirect HTTP to HTTPS

*Distribution Settings*
- Price Class: Use Only U.S., Canada and Europe
  - Since I don't expect users in Asia to be looking at this site I use this option. Choose the option that makes sense for you.
- Alternate Domain Names (CNAMEs): (on sperarate lines trivalleycoders.org, www.trivalleycoders.org
- SSL Certificate: Custom SSL Certificate
  - Click in the edit box and choose your certificate from above

> TODO: include instructions for logging?

You will be redirected to the CloudFront Distributions page. The status of your distribution will be 'in Progress' for 15 minutes or so. In the mean time, 'Update Your DNS to use CloudFront'

# Updating DNS Records to Point to CloudFront

Click 'Create Distribution'
- Record the 'Domain Name': dyf96x1rifcde.cloudfront.net
- Double check that IPv6 is enabled

- Go to [Route 53](https://console.aws.amazon.com/route53/home)
- Click on 'Hosted zones' and then your zone (trivalleycoders.org)
- Select the A record for trivalleycoders.org and change the Alias Target to: dyf96x1rifcde.cloudfront.net
  - You may see your domain in the list under 'CloudFront distributions'. If you do you can select it rather than pasting in the domain.
- Click 'Save'
- Click 'Create Record Set'
- Leave the name blank (this will create a record for the apex domain 'trivalleycoders.org')
- Type: AAAA - IPv6 address
- Alias: Yes
- Alias Target: damifv64aaqx5.cloudfront.net
- Click Save

- Repeat the above 8 steps for the www.trivalleycoders.org A record

- Test you site. All the below patterns should by resolving to https://trivalleycoders.org or https://www.trivalleycoders.org.

> Note: You may need to clear your browser's cache

  - https://trivalleycoders.org
  - apex domain: trivalleycoders.org
  - www sub-domain: www.trivalleycoders.org
  - http://trivalleycoders.org
  - https://trivalleycoders.org
  - http://www.trivalleycoders.org
  - https://www.trivalleycoders.org


**END OF STEPS**

***

[Amazon CloudFront Developer Guide]https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)

This article explains how to setup the DNS records: [Routing Traffic to an Amazon CloudFront Web Distribution by Using Your Domain Name](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html)

> *Important:* When using an S3 bucket configured as a Website Endpoint for the origin, use the bucket's static hosting endpoint for the origin. Do not use the bucket name.

> Route 53 charges for CNAME queries. It doesn't charge for queries to Alias queries

Maybe not if you are using HTTPS, dee p.95: For using custom domain name see Amazon CloudFront - Developer Guide (pdf) p.59 Using Custom URLs for Files by Adding Alternate Domain Names (CNAMEs)

> *Mistake:* It appears that when you are using Route 53 for DNS you should use an A name. If you are using another DNS provider you should use a CNAME. I was using Route 53 with CNAME so not correct. Source: CloudFront Developer Guide (pdf) page 61.
> *Solution:* Yes, that was the problem. Create the A and AAAA records with the CloudFront domain name

Checkout dig: http://www.kloth.net/services/dig.php as a way of confirming resource record set

Here is the section for using HTTPS: Using HTTPS with CloudFront p. 85


# HTTPS
There are 2 parts to https with CloudFront
1. requests between viewers and CloudFront
2. requests between CloudFront and the origin

We are using a 'S3 bucket configured as a website endpoint' as the origin. According to the manual on p.90
> If your Amazon S3 bucket is configured as a website endpoint, you can't configure CloudFront to use HTTPS to communicate with your origin because Amazon S3 doesn't support HTTPS connections in that configuration.


