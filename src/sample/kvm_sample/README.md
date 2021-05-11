# How to use sample_kvm.htm

## Prerequisites
 
- Make sure Open AMT Cloud Toolkit is up and device is connected
- Make sure CORS is enabled



## Configuration changes

- Open sample_kvm.htm and change 'config' object

``` javascript
var config = {
      deviceUUID: "ca3f3f6e-a6c9-11ea-beb7-c80344ed6001", //device UUID
      redirectionPort: 16994, //Don't change this
      url: "wss://localhost/mps/ws/relay", //wss://<serverFQDN>/mps/ws/relay
      throttleMousemove: 200, //KVM issue, Mouse move needs atleast 200 Millisecs throttle time
      encoding: 1 //1 - RLE8 and 2 - RLE16
    }
```


## Open HTML file

- Open sample_kvm.htm in Chrome or Firefox
- Click 'Connect'
- Let me know how it goes :)


## Note

This sample is just meant for development