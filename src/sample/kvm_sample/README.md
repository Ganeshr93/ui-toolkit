# How to use sampleKVM.htm

## Prerequisites
 
- Install live-server globally (npm install -g live-server)
- Make sure that the CORS origin in MPS is set to right port (In this example, set it to 3500 - http://localhost:3500)
- Make sure that the MPS is running and device is connected.


## Configuration changes

- Open sampleKVM.htm and change 'config' object

``` json
var config = {
      deviceUUID: "ca3f3f6e-a6c9-11ea-beb7-c80344ed6001", //device UUID
      redirectionPort: 16994, //Don't change this
      url: "localhost:3000/relay", //serverFQDN:Port/relay
      throttleMousemove: 200, //KVM issue, Mouse move needs atleast 200 Millisecs throttle time
      encoding: 1 //1 - RLE8 and 2 - RLE16
    }
```


## Run 

Run the sample using live-server

```bash
live-server --port=3500 --entry-file=sampleKVM.htm
```


## Access the HTML file

- Open the URL (http://localhost:3500/sampleKVM.htm) in Chrome
- Click 'Connect'