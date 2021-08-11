Remote Technician was designed to allow remote access to a devices embedded webserver (EWS) from anywhere. It does not require any special network or firewall configuration and works out of the box. Some devices may not have the EWS feature enabled in which case Remote Technician will be unable to connect to the device.

!!! warning
    This feature is still in beta and not all devices are expected to be compatible.

By default, all installs are configured to allow Remote Technician access to devices. This can be disabled on a per-install basis, or for entire entity hierarchies. Users with the _Remote Technician Configurer_ role are allowed to enable or disable Remote Technician access for entities or installs. Users with the _Remote Technician User_ role are allowed to access device EWS assuming that Remote Technician access has been enabled for the device's install.

Remote Technician uses jobs that are sent to an install to create on-demand, temporary connections between your web browser and the device's EWS. These temporary connections last 30 minutes before they're automatically closed. If you need continued access to a device's EWS beyond the 30 minute connection timeout, you will need to start the [connection process](#using-remote-technician) over again.

Because Remote Technician relies on jobs sent by the user to initiate a connection, Remote Technician may take a long time to load if the install is currently discovering devices, collecting meters or is otherwise occupied. In these situations, the job sent to the install (in the jobs list it's called "Open Device Webpage") may sit in a "Received" status for a prolonged period of time.

## Enabling Permissions
Unauthorized access to Remote Technician is protected using [two Print Tracker roles](./whitepaper.md#managing-permissions). As a master admin, you can assign these roles to anyone in your hierarchy.

1. Using the sidebar, navigate to **Admin > Manage users**
2. Find the user to whom you'd like to grant Remote Technician roles
3. Click on the **pencil icon** on the right-hand side of the row
4. Click the **Permissions** tab
5. Click on the **Roles** drop-down list
6. Select the appropriate [roles](./whitepaper.md#managing-permissions)

## Using Remote Technician
Assuming that Remote Technician is enabled, you can open Remote Technician for any device in your fleet.

1. Start by navigating to the device list using the sidebar **Devices > View devices**
2. Click on the device row that you'd like to connect to
3. Click the **Remote Technician** tab
4. Click the **Open Device Webpage** button
5. A new tab will open with a loading screen. The new tab checks for a device connection every few seconds. You may have to wait several minutes for the device to connect. If the device does not connect after a few minutes, try the [troubleshooting steps](#troubleshooting) below.

## Troubleshooting
* Navigate to the entity that the device belongs to. In the device list, the "Entity name" column can be copied into the entity selector to navigate down your hierarchy to the entity that owns the device. From this entity you can check whether the install is online (sidebar **Installs > View installs**) and whether jobs are being received (sidebar **Jobs > View**).
* Make sure the install has received the Remote Technician job by using the sidebar to navigate to **Jobs > View** and look for a job near the top of the list called "Open Device Webpage". Once the job is completed, the device's EWS should load.
* Make sure that the devices EWS (embedded web server) feature is enabled. You or the end-customer can verify that the EWS is enabled by entering the IP address of the device in your browser while connected to the same network of the device. If you see a webpage for the device, then the device's EWS feature is enabled.
* Make sure that the device still exists at its current IP address. You can run a custom network scan on only the device's IP address to verify that the IP address of the device has not changed. You may also consider running a full network scan to ensure that you discover the device's new IP address if the device moved IP addresses recently.
