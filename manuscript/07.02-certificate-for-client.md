# Get a certificate for your domain

Prerequisites
- A domain (example will use trivalleycoders.org)
- A bucket you app files
- Bucket is configured with public access
- A DNS setup for your domain. This example uses Route 53
- Any subdomains you want to use. We will use the www subdomain.

Go to the [Certificate Manager](https://console.aws.amazon.com/acm/home?region=us-east-1#/)
- You must use the N. Virginia (us-east-1) region which is linked above

- Click 'Request a certificate'
- Select 'Request a public certificate'
- 'Request a certificate'

Step 1 Add domain names
- add trivalleycoders.org
- add www.trivalleycoders.org
Click 'Next'

Step 2 Select validation method
- Select 'DNS validation'
- Click 'Review'
Step 3 Review
- Definitely make sure it is correct to avoid pain later
- Click 'Confirm and request'
Step 4 Validation
Shortly after the page loads the 'Validation status' column will say 'Pending validation'. 
- Click the first domain to open the details.
- Click 'Record record in Route 53'
- A modal dialog appears. Click 'Create'
  - You should see a green 'Success' box but the 'Validation status' may still be 'Pending validation'. 
- Repeat the above X steps for the second domain
- Go to [Route 53](https://console.aws.amazon.com/route53) and navigate to your hosted zone
  - You should see the two CNAMEs added by the certificate validation process
- Go back to the Certificate Manager home page and expand the trivalleycoders.org certificate. Both domains will now have a 'Validation status' of 'Success'. They they are not, wait a few minutes and try again.

