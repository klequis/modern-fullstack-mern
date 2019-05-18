# Introduction #

## Who is this book for?
This is an intermediate to advanced level book. Readers should have a firm grasp of JavaScript and a basic understanding of React, Express, Node & MongoDB. The book it more implementation than concept focused.

## Testing
Given the amount of time needed to write this book vs the amount of time I have, I decided early on to not focus on testing for fear of turning the project of writing this book into something larger than I would be able to complete. That said, automated tests are essential to making good software.

## Code Editor
The client application will be using TypeScript. For the server, using TypeScript types from [DefinitelyTyped](http://definitelytyped.org/) as well as types that are built into libraries makes coding significantly easier. While you can use any editor you prefer, [Visual Studio Code](https://code.visualstudio.com/) is referenced by some of the examples and in my opinion, is the best free choice for using TypeScript.

## Mac, Linux & Windows
I work exclusively on Linux (Ubuntu 18.04). As a result, everything in the book will work on Mac and Linux. There are some difference in configuration for getting things to work on Windows. However, due to time constraints I will not be including that information.

## Give Ubuntu (Linux) a Try
For those not familiar with Linux I'll mention that doing software development on Linux is a genuine pleasure and a great learning experience that will help you in the server world. In fact, the Express server build in this book will run on Ubuntu, a variation of Linux. I highly recommend giving Ubuntu a try as you everyday development machine.

Spinning up a Linux virtual machine is an easy thing to do and a good learning experience in itself. In my experience with running a Linux VM on Windows, you need about 8 GB RAM. More is better. If you are short of RAM you can dual boot your system.

## Async/Await
The code will use async/await. If you are not familiar with them, under the covers they are promises, but have a better syntax. A good reference for learning to use async/await is XXXXX.

## Perferences
Software development is full of preferences and from choice of code editor to libraries used, this book very much reflects mine. My preferences may not be any better than someone elses. They may even be worse. However, they have been working well for me in terms of productivity, flexability and robustness.

## Choice: DigitalOcean
I like the price and, even before I started using them for hosting, many of my Google Linux questions landed on DigitalOcean's well writting Linux guides.

## Choice: AWS S3
Again, I like the price of hosting on AWS S3. Deploying a React application to S3 is also very easy. I currently have about 6 sites hosted there.

## Choice: AWS Route 53

## Choice: Not putting the client on the same server (i.e., DigitalOcean droplet) as the server (i.e., todo-server)
> bla, bla, bla ... do I need to address this
I have another demo app deployed with both the client and server hosted on a DigitalOcean droplet. This works well and is only costing about $5 per month. However, note it is a demo app and is built with the lowest priced/configuration droplet. A production app would require a higher level of resources.
