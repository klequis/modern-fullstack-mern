1. Login
2. Create a new bucket named kelquis-todo.tk
2.1. Set
- Bucket name: klequis-todo.tk
- Region (for me): 
2.2. Click Next
2.3. Click Next 
2.4. Click Next
2.5. Click Create bucket

?. Grant public access?
Click on the new bucket then click Permissions > Public settings and set all 4 options to true
> TODO: Confirm this is really needed. If you don't do so you can't put in the below (public) bucket policy. I suspect that once the site is up and running, one or more of these should be turned back on.
> Per https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html
> You only need to uncheck Block new public ACLs and uploading public objects & Remove public access granted through public ACLs - Give this a try.




3. Set bucket policy & ?
3.1. Click on the new bucket then click Permissions and then Bucket Policy
3.2. 
> Note the ARN just above the edit area
Paste in the below and change to your ARN
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::klequis-todo.tk/*"
        }
    ]
}
```
3.3 Click Save

4. Click Properties > Static website hosting and set
- Use this bucket to host a website: checked/true
- Index document: index.html
- Error document: index.html
4.1. Click Save

5. Create another bucket named www.klequis-todo.tk
Bucket name: www.klequis-todo.tk
Region: US West (Oregon)
Next
Next
Next
Create bucket

6. Click Properties > Static website hosting and set
- Redirect requests: checked/true
- Target bucket or domain: klequis-todo.tk
7. Create test file
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <h1>S3 Bucket Test - <span style="color: green"><b>SUCCESS!</b></span></h1>
</body>
</html>
```
7. Go back to the klequis-todo.tk bucket and upload index.html
- can drag and drop file
Next
Manage public permissions: Grant public read access to this object(s)
Next
Next
Next
Upload

Go back to Properties > Static website hosting and click on the endpoint again. The new page should be displayed.


8. Click Properties > Static website hosting and click the endpoint at the top of the card. The site should open.

9. Build the project and upload files from /build

