## Overview
Security is always a primary concern at Print Tracker Pro. Every proposed feature undergoes rigorous scrutiny prior to release. This white paper illustrates the security profile of the new Remote Technician feature.

* Managing permissions
* Enabling the feature
* Security
* Auditing

## Managing Permissions
Print Tracker Pro’s web interface has fine-grained role based access controls. There are two roles that pertain to the Remote Technician feature.

* **Remote Technician Configurer** Gives a user the ability to enable/disable Remote Technician for devices managed by the user.
* **Remote Technician User** Gives a user the ability to use the Remote Technician feature for enabled devices.

## Enabling the Feature
Once a user has the Remote Technician Configurer role, a new setting will become visible within each device allowing them to enable/disable Remote Technician for any device.

## Security
The following describes the behavior of the system when an authorized user successfully initiates a Remote Technician session.

1. The web UI sends a message securely via mTLS GPRC to the install.
2. The install verifies the mac address or serial number of the device.
3. The install initiates a persistent TLS connection to the Remote Technician server.
4. The user’s browser initiates an OAuth 2.1 PKCE token exchange with the Remote Technician server.
5. The user’s browser is redirected via HTTPS to the Remote Technician server.
6. Requests from the user’s browser are passed securely over TLS between the device and the user's browser.

Remote Technician does not require any special port-forwarding rules or firewall configurations. The install initiates the persistent TLS connection with the server (outbound traffic) and uses that connection to allow the user to communicate with the device.

## Session Management
Each Remote Technician session lasts for a maximum of 30 minutes. After 30 minutes, a new session must be created via the UI.

## Content Security Policy
Restricted Cross Origin Resource Sharing and a strict Content Security Policy applied to traffic traversing the Remote Technician server severely limits any sort of lateral movement that might be attempted by a malicious device as well as eliminating any potential for cross site request forgery.

## Auditing
Each session is represented as an Open Device Webpage job. Viewing any job of this type in the Jobs tab will display a Remote Technician Log at the bottom which contains the complete HTTP access logs for the session.

## Conclusion
With Role Based Access Control, OAuth 2.1, TLS, and a strict Content Security Policy, the new Remote Technician feature enables new capabilities while maintaining a robust security profile.
