# Devices
A device refers to a printer located at an IP address on a local network accessible to a registered install. Devices are discovered by installs, and viewable inside of entities in the web admin. Print tracker can collect data from both networked devices and local devices.

## Networked devices
A networked device is a printer that is accessible over the local network via a wireless or hard-wired connection. The networked device must be assigned an IP address and be accessible from other devices on the network.

### Discovery
Newly registered installs automatically scan the network they were installed on looking for any device that could be classified as a printer. This classification is based on the following conditions:

* The device has SNMP (on port 161) enabled.
* The device responds to an ICMP ping request.
* The device responds to an SNMP request.
* The device reports the [standard SNMP printer MIB](https://datatracker.ietf.org/doc/html/rfc3805).

Assuming that all of these conditions are true, Print Tracker will discover the device. In some cases install settings may need to be altered in order to discover certain devices, for example, if a device uses [SNMPv3](https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol#Version_3) then you will need to configure the install to connect to the device using the appropriate credentials.


## Local Devices
A local device is a printer that is connected to a computer with a registered install via USB. Print Tracker only supports local devices on Windows machines and can only collect a fraction of the data that can be collected from network devices[^1]. In nearly all cases, we recommend exposing devices to the local network to fully take advantage of Print Trackers extensive data collection capabilities.

### Discovery
Local devices data is collected using the Windows Print Spooler, therefore Print Tracker requires the that device be registered as a Windows printer with all the appropriate drivers installed.

[^1]: 
    Print Tracker collects black and color (if applicable) page counts only from local devices.

## Data Collection
Each device stores supply information differently. Where possible, Print Tracker captures supply data (toners, inks, fusers, drums etc.) and meter data (equivalent total, equivalent black copies, etc.). Some devices store the percent remaining for a specific supply to the nearest 1/10th of a percent, while others only record the supply level as OK or LOW or OUT.
