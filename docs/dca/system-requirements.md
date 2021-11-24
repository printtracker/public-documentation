The data collection agent is a lightweight application that runs as a Windows service inside an end-customer network. It is completely self-contained and does not require any third-party applications or services to come pre-installed on the machine.

## System Requirements
Many of the following system requirements depend on the number of devices that are going to be tracked by this data collection agent. For networks with less than 100 devices, the minimum system requirements should be sufficient. For all other network sizes, we recommend that you install the data collection agent on a machine that meets the recommended system requirements.

||Minimum|Recommended|
|--|--|--|
|Operating System|Windows||
|CPU|1GHz x 2 cores|3GHz x 4 cores|
|Memory|500MB|4GB|
|Disk|2GB HDD|10GB SSD|
|Other Considerations|The data collection agent should not be installed on a laptop or any other machine that frequently shuts down, or the reliability may be affected.||

## Network Requirements

!!!info
    Print Tracker Pro does not require any port-forwarding rules or special networking configurations in order to operate normally. All network traffic regardless of protocol is at least TLS encrypted, while the majority of network traffic is encrypted using mTLS.

Data collection requires internet connectivity in order for meters and alerts to be uploaded to [app.printtrackerpro.com](https://app.printtrackerpro.com). Our agents require access to the following domains which may need to be whitelisted in your network configuration:

|Domain|Protocol|Purpose|
|--|--|--|
|dcam.printtrackerpro.com|HTTP/2|Allows data collection agents to receive jobs, upload meters, and fire alerts.|
|csr.printtrackerpro.com|HTTP/2|Allows data collection agents to register under entities that you configure.|
|hc.printtrackerpro.com|HTTP|Allows data collection agents to report their health status.|
|remotetechnician.printtrackerpro.com:6000|Proprietary|Allows authenticated users to remotely access device embedded webservers if the feature is enabled.|