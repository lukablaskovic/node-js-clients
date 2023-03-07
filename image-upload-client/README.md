# Image upload client

## What is it?

A simple image upload client written in javascript for sending data in multipart/form-data enctype. Multipart/form-data is a content type used in HTTP requests to send binary data and large files from the client to the server.

## Why multipart/form-data?

It allows multiple files and fields to be sent in a single request which makes it ideal for complex data structures and file uploads.

## How to receive such request?

When a server receives a multipart/form-data request, it must parse the request and extract the data from each part.

## How to use?

To use this client, just change the URL variable:

```javascript
const url = "ENTER_URL_HERE";
```
