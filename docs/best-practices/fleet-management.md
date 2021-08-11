# Fleet Management
## Install Topology
Install topology refers to the way you choose to organize and register your installs (data collection agents) within your entity hierarchy. Here are some considerations to keep in mind:

* Clicking buttons like "Upload Meter Reads" from the "View Devices" page results in sending jobs to all installs at the current entity. Try and structure your entity hierarchy in such a way that the number of installs per entity is as small as possible. For example, if you're managing devices for all Walmarts in the state of Idaho, instead of putting all installs under one entity called "Walmart", you might create an entity for each Walmart (one entity per physical location) or an entity for each region of Walmarts (one entity to cover East Idaho, one for West Idaho, etc).
* You should only register multiple installs that will track the same devices for redundancy (if one install goes offline, you have another that can continue to collect data from your devices).
* If you are registering multiple installs that will track the same devices for redundancy, don't register more than three. More installs tracking the same devices makes managing your fleet more tedious.

## Timeout and Retry Configuration
Devices are discovered using a combination of network ping and SNMP requests. The behavior of these two types of requests can be configured by tweaking the timeout and retry values for a device. Here are some considerations to keep in mind as you adjust these settings:

* During device discovery, all IP addresses that a DCA has been configured to scan will be scanned using the same timeout and retry settings regardless of whether there is a real-world device at the IP address. Let's say for example that you're scanning the 10.0.0.0/24 network for devices using a timeout of 1s and 3 retries. This translates to:

    \begin{align}
    255\ IP\ addresses \times (1s\ timeout \times 3\ retries) \times (1\ ping\ +\ 1\ snmp) \\
     = 1,530\ seconds \\
     = 25.5\ minutes
    \end{align}

    !!!note 
        These number are the "worst case" scenario. If a device is at the IP address and does respond to both the ping and SNMP requests, the actual time spent at the IP addree may be much less the what was shown here.
    
    In other words, it will take 3s for the SNMP request and 3s for the ping request for each IP address. You should balance configuring the timeout and retry settings with ensuring that your device scans do not take longer then a few hours at most.
