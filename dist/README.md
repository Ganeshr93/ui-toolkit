# How to use sample_kvm.htm

## Prerequisites
 
- Make sure Open AMT Cloud Toolkit stack is up and device is connected
- Make sure CORS is enabled
- Generate core.min.js from ui-toolkit repository (command: npm run build)

## Configuration changes

- Open sample_kvm.htm and change 'config' object

``` javascript
var config = {
      deviceUUID: "ca3f3f6e-a6c9-11ea-beb7-c80344ed6001", // device UUID
      authToken: "JWT TOKEN", // JWT Token
      redirectionPort: 16994, // Don't change this
      url: "ws://192.168.88.250/mps/ws/relay", // wss://<serverFQDN>/mps/ws/relay
      throttleMousemove: 200, // KVM issue, Mouse move needs at least 200 Milliseconds throttle time
      encoding: 1 // 1 - RLE8 and 2 - RLE16
    }
```


## Open HTML file

- Open sample_kvm.htm in Chrome or Firefox
- Click 'Connect'
- Let me know how it goes :)


## Note

This sample is just meant for development