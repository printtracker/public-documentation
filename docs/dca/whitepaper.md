## Overview
Print Tracker Pro data collection agent (DCA) is a light-weight monitoring software for printer and copier devices. Each new release version of Print Tracker Pro is submitted to all major virus-protection companies for review prior to its public release. After download, Print Tracker Pro is installed by default within the C:\Program Files (x86)\Print Tracker Pro folder. The installation consists of the data collection agent (a Windows service and graphical interface) and configuration files. The entire downloaded file is about 60mb.

Print Tracker Pro software can be installed to run from an end user’s workstation or on any other Windows-based machine, virtual machine or server within a network.

Print Tracker Pro utilizes a network layer abstraction called gRPC (or Google Remote Procedure Call) that is powered by the new major revision of HTTP, called HTTP/2. Additional details about HTTP/2 can be found [here](https://developers.google.com/web/fundamentals/performance/http2). This article will be referenced throughout this whitepaper for explanations as to the advancements in HTTP/2 over HTTP, and how these new features affect the print tracking industry.

The technology used by Print Tracker and outlined in this whitepaper is used by top companies such as Netflix, Microsoft, Google, and more to provide a reliable and high-performance experience interacting with information. It is our goal at Print Tracker to take the technology that already impacts other aspects of our lives and bring it to the print tracking industry.

## General Functionality
### Network device discovery

Using SNMP version 1, 2 or 3 over port 161, Print Tracker Pro is designed to discover any network-connected and locally-attached print device (MFPs, copiers and printers, etc.) in the environment in which it is run or installed. Particular network segments or IPs can be specified along with limiting the scan to X number of hops from the original network segment where it is installed. If SNMP provided information is incomplete, Print Tracker Pro may request data from the device’s embedded web server over port 80 or other common HTTP ports as defined by the device manufacturer. Collected information includes the device’s network name, MAC address, model, serial number, total page counter, color page counter, prints, copies, faxes, scans, location, supply levels and status. Print Tracker Pro cannot gather printed content or interpret user intent. If desired, IP addresses of devices may be blocked from being reported.

### Functionality of the Print Tracker Pro Data Collection Agent
Print Tracker Pro has a very small impact on network performance by running as a service in the background. Periodically it pulls meters to analyze data coming from existing devices for low-toner alerts and other user-defined events. When and how often the software runs these scans throughout the day can be easily configured within the user settings. For a typical network segment, Print Tracker Pro will send or receive about 80 KB of data per device when it pulls the meters.

By default, twice a week Print Tracker Pro performs a search of user-selected network segments to see if new devices have been added. Any new devices discovered will be added to a total list of devices and will automatically be tracked and managed from that point forward. If meter data cannot be pulled from a device for more than six weeks, that device will drop off the reports.

After it is collected, new meter data is securely posted to remote Print Tracker servers. All data is encrypted using the HTTPS protocol on port 443. Print Tracker Pro cannot and does not collect a document’s contents or user information.

In the event a DCA has issues that require assistance from the Print Tracker support team, locally created log files will be gathered into a single compressed file and uploaded to secure web servers for review. These files contain only information relating to the Print Tracker software, the host machine, and the device information gathered.

### SNMP v1, v2 and v3 compliance
Print Tracker Pro discovers network devices that respond to Simple Network Management Protocol (SNMP) requests. A version of SNMP (either v1, v2 or v3) must be enabled for Print Tracker Pro to capture device information.

By default, all Print Tracker Pro installations capture information from devices that have SNMP v1 & v2 enabled. All devices are shipped with SNMP v1 & v2 enabled.

SNMPv3 encrypts the data and is the most secure protocol available. SNMPv3 is only available on newer imaging devices. SNMPv3 is disabled when devices are shipped from manufacturers. Information from SNMPv3 enabled devices can be captured by Print Tracker Pro only after granting permissions.

## Increasing Device Security
Imaging devices have several configurable settings that relate to security. These settings can alter the effectiveness of software solutions, such as Print Tracker Pro, that monitor devices for status, toner level, or service requirements.

To minimize a customer’s security exposure, open features such as SMB, NetBIOS, FTP, web access, and/or SNMP features of the imaging devices can be turned off or deactivated. For supply levels to be read and alerts to function, the embedded web server on some devices must be accessible. Supply levels are not available via SNMP for all devices.

## Working with Anti-Virus Software
Print Tracker Pro software can be deployed in many different environments. Each environment has been setup to promote business activity. The use of anti-virus software has become a vital part of IT infrastructure with the desire of minimizing business interruptions.

Unfortunately, not all anti-virus software products work equally well. As some are provided free of charge, and others are not, differing amounts of care are taken to ensure that the level of threat posed by a file is accurate. All anti-virus software has determined and will from time-to-time incorrectly determine, that virus-free files are a threat. These are called false positives.

On occasion anti-virus software may flag a Print Tracker Pro file as a threat. Print Tracker Pro software is virus-free. When Print Tracker Pro Support is notified of a false positive, Print Tracker Pro personnel notify the anti-virus software provider of the issue and request that they resolve the problem by fixing their virus definitions or software. Some anti-virus software providers are very responsive, others are not.

Many anti-virus software providers have an exception list, called a whitelist, that allows their software to correctly recognize clean files as virus-free. Print Tracker Pro periodically submits files to various providers to keep Print Tracker Pro files included in anti-virus software whitelists.

Print Tracker Pro does not have any control over the environments in which the software is deployed. Although Print Tracker Pro has taken steps to prevent deletion by anti-virus software, the onsite IT personnel have the responsibility to maintain their environments.

## Print Tracker Pro Compliance
### HIPAA compliance
The Health Insurance Portability and Accountability Act (HIPAA) of 1996 (P.L.104-191) [HIPAA] was enacted by the U.S. Congress in 1996. Title II of HIPAA, known as the Administrative Simplification provisions, required the establishment of national standards for electronic health care transactions while aiming to increase the efficiency of the health care system.

The Department of Health and Human Services drafted rules for the use and dissemination of health care information under Title II. The Administrative Simplification rules, including the HIPAA Privacy Rule, address the security and privacy of health data.

The HIPAA Privacy Rule regulates and establishes regulations for the use and disclosure of Protected Health Information (PHI). PHI is any information held by an entity which concerns health status, provision of health care, or payment for health care that can be linked to an individual. The HIPAA Privacy Rule also encourages the widespread use of electronic data interchange in the U.S. health care system.

Print Tracker Pro can only access an imaging device’s meter information in the form of:

* Page counts
* Copy counts
* Scan counts
* Fax counts
* Supply levels
* Device service needs

Printed, copied, scanned or faxed content is inaccessible to Print Tracker Pro and therefore security of patient or business information is guaranteed.

**Print Tracker Pro is HIPAA compliant** because the software does not have the ability to capture PHI including: health status, provision of health care, or payment for health care and cannot link to files or this information stored electronically or printed on a page.

### GDPR compliance
**Print Tracker Pro is General Data Protection Regulation compliant.** All Print Tracker Pro data is stored on GDPR-compliant servers.

### Sarbanes-Oxley compliance
Sometimes referred to as the Public Company Accounting Reform and Investor Protection Act of 2002, Sarbanes – Oxley is geared toward accountability. Compliance is not optional, all publicly traded corporations must comply with the mandates of the act.

**Print Tracker Pro is Sarbanes - Oxley compliant** because it does not store, process, transmit or come in contact with any financial documents or reports.

### FISMA compliance
The Federal Information Security Management Act (FISMA) is a United States federal law as Title III of the EGovernment Act. The act recognizes the importance of information security to the economic and national security interests of the United States. The act requires agencies to develop, document, and implement programs that provide information security for the information and systems that support the operations and assets of the agency, including those provided or managed by a contractor or other source. The E-Government Act is a United States statute. Its stated purpose is to improve the management and promotion of electronic services and processes by establishing a framework of measures for Internet-based information technology. All government agencies must comply with the mandates of both acts.

**Print Tracker Pro is Federal Information Security Management Act compliant** because the software can be installed on any managed computer or system, does not increase risk vulnerability or allow changes to systems or security controls, and the information it gathers can be used to maintain cost objectives for any government agency.

## Connectivity with the DCA
Print Tracker Pro brings cutting-edge technology to the print tracking industry by merging time tested, industry-standard principles with new ideas, creating the best possible printer tracking experience with the lowest overhead possible.

### Service Mode vs Normal
Print Tracker Pro offers two forms of connection with the Web Admin. The first is the standard pull-connection where the DCA checks in with the server on a regular interval for new settings, instructions or jobs to complete. Print Tracker Pro checks in with the server about every 5 minutes allowing for a relatively quick time frame for new settings and instructions to be picked up by the DCA. While this solution is adequate for most needs, it takes a significant amount of time to troubleshoot, make remote changes, and update settings. In the past, solutions were presented to accomplish a more real-time connection between DCAs and remote servers by maintaining open ports where the two parties could push and pull data between each other. This, however, presents major network vulnerability risks that organization should not and are not willing to make.

Print Tracker Pro also offers a new industry-changing option called ServiceMode in which a real-time streaming connection is opened between the Web Admin and a single DCA. This allows the Web Admin to work with the DCA as if they were on the same machine, sending instructions and receiving responses immediately.

There are a number of security issues to consider when connecting the Web Admin to a remote DCA installed within a private network. Several new protocols that sit on top of existing networking layers have been developed and implemented that bridge the gap between security and real-time capabilities, allowing for a new generation of print tracking technology and near real-time connectivity.

### HTTP/2
The primary goal of HTTP/2 is to reduce latency by enabling full request and response multiplexing, minimize protocol overhead via efficient compression of HTTP header fields, and add support for request prioritization and server push. HTTP/2 does not modify the application semantics of HTTP in any way. All core concepts, such as HTTP methods, status codes, URIs, and header fields, remain in place. Instead, HTTP/2 modifies how the data is framed (formatted) and transported between the client and server, both of which manage the entire process, and hides all the complexity from applications within the new framing layer.

The current paradigm that has driven DCA development to this point is the standard client to server request and response mechanism: a client makes a single request, a server responds with a single response. A powerful new feature of HTTP/2 is the ability of the server to send multiple responses for a single client request. That is, in addition to the response to the original request, the server can push additional resources to the client, without the client having to request each one explicitly. This abstraction allows for what we call server push.

### Security
The ability for a remote party to push data and trigger remote actions can seem like a massive security vulnerability at first sight, however, there are several security mechanisms that minimize the risk to the same level as the risks that standard HTTP present. Under the hood, clients in an HTTP/2 stream always have the option to decline information pushed from a server, however, in a scenario where the remote server is a trusted party, there is usually no reason for a client to deny remote information.

In a web browser, malicious attacks are prevented by preventing the remote execution of code based on the origin of the server that is providing it. Print Tracker Pro uses a similar concept where both the DCA and the server engage in a mutual TLS handshake when a DCA is registered. This handshake ensures communication can now only be done between that specific instance of a DCA, and the specific remote server with which the DCA requested a handshake. This prevents malicious third-party attacks because they were neither the requesting DCA nor the remote server.

### Restricted scope of actions
Every DCA has a predefined set of abilities which can be remotely triggered, these abilities include (but are not limited to) updating local DCA settings, scanning the local network for devices that respond on port 161 (SNMP), etc. This is identical to how current DCA technology works, where a DCA will receive instructions to perform a specific task and will then execute that task based on predetermined logic that was installed with the DCA. Print Tracker Pro brings the ability to send these tasks to individual DCAs over the HTTP/2 stream with which the DCA established connectivity when it was started, allowing a near real-time interaction between dealers, and their customer's machines.

Print Tracker DCAs use a runtime scripting language that enables fine-grained, dynamic data collection from individual devices which allows Print Tracker to rapidly deploy changes to data collection logic on a case-by-case basis. This scripting language runs in a sand-boxed environment that is isolated from the host machine and only can perform a prescribed set of actions. The scripting language has access to the Print Tracker-installed Chromium instance which is used for extracting device data via the device's embedded web server (EWS).

### gRPC
Print Tracker Pro does not deal directly with the HTTP/2 transport, but instead utilizes an abstraction layer developed by Google called gRPC (Google Remote Procedure Call). The goal of gRPC is to provide a simple and secure way to initiate an action on another computer across a network. Within the first year of its launch, gRPC was adopted by CoreOS, Netflix, Square, and Cockroach Labs among others. Etcd by CoreOS, a distributed key/value store, uses gRPC for peer communication. Telecom companies such as Cisco, Juniper, and Arista are using gRPC for streaming the telemetry data and network configuration from their networking devices. gRPC has SSL/TLS integration and promotes the use of SSL/TLS to authenticate the server, and to encrypt all the data exchanged between the client and the server. Print Tracker Pro utilizes the mutual TLS authentication method to secure client to server (and vice versa) communication.

gRPC has SSL/TLS integration and promotes the use of SSL/TLS to authenticate the server, and to encrypt all the data exchanged between the client and the server. Print Tracker Pro utilizes the mutual TLS authentication method to secure client to server (and vice versa) communication.

### Network traffic
A core concern when facilitating this real-time communication was the amount of network traffic that HTTP/2 streams would bring to a customer’s local network. gRPC uses an IDL (interface definition language) to prescribe the type of data that will be sent over the wire. This allows Print Tracker to send data faster and smaller than most other wire-format protocols would allow.
