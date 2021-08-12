Settings determine the behavior of every operation in Print Tracker. Print Tracker uses dynamic settings inheritance (DSI) to give you the ability to make broad, sweeping changes to the settings of your entire fleet, or microscopic changes to specific devices. [Click here](../concepts/settings.md) learn more about DSI. In this section we'll cover what settings can be configured at the entity, install, and device levels as well as what each setting does. Understanding the purpose of each setting will help you keep a high device-reporting rate.

## Entity Settings
Most entity-level settings are actually install-level and device-level defaults, in other words, their presence on the entity-level is only meant to allow you to configure the defaults used all installs and devices in the entity's hierarchy. We'll look at each of these default setting sections. Keep in mind that these are defaults only, this means that if a specific install or device chooses to override the setting with a different value, the entity-level default will not be applicable anymore.

### Install default settings
These settings are applicable only to installs in your entity's hierarchy.

!!! example "Install alerts"
    
    #### New install alerts (toggle)
    If this setting is enabled and new install alert emails have been configured, emails will be sent everytime a new install is registered.

    ---

    #### New install alert emails (emails)
    You can enter any number of emails. Each email address will receive an email notification whenever a new install is registered.

!!! example "Data collection agent"

    #### Upload daily meter read (single-option)
    Determines what time range during the data meter reads are collected from all devices and uploaded.

    ---

    #### Scan for new devices on days (multi-option)
    Determines which days of the week a network scan is performed. Network scans look for new devices and for discovered devices whose IP addresses have changed. The network scan uses any [IP addresses](#ip-addresses) that have been configured. If an install does not scan on any day of the week, devices that move IP addresses will stop reporting.
    
    ---

    #### Real-time connection (toggle)
    If enabled, the install will connect to Print Tracker using a mTLS secured, HTTP/2 stream which allows the install to receive jobs from the web admin as soon as they're sent. If this setting is disabled the install will connect periodically to receive jobs. We reccomend that users enable this setting when they're troubleshooting or are interacting with the install regularly.

!!! example "Network discovery"

    #### Max hops (number)
    Refers to the maxmimum number of inter-network router-hops that an install will perform when doing automatic network scans. Automatic network scans only occur when an install is registered for the first time and when no [IP addresses](#ip-addresses) are configured for that install to scan by default.

    ---

    #### IP addresses to scan (IP address/range/wildcard/CIDR)
    When a [network scan](#scan-for-new-devices-on-days) is performed, it uses the IP addresses, ranges, wildcards, or CIDR blocks to determine when IP addresses should be scanned.

    ---
    
    #### IP addresses to skip (IP address)
    When a [network scan](#scan-for-new-devices-on-days) is performed, it excludes the IP addresses configured here. Priority is always given to excluded IP addresses, in other words if you add the IP address to the [IP addresses to scan](#ip-addresses) setting, as well as this setting, the install will ultimately skip scanning the IP address. You can exclude specific IP addresses but you cannot exclude ranges, wildcards, or CIDR blocks.

!!! example "Remote technician"

    #### Remote Technician (toggle)
    If enabled, users with the appropriate roles will be able to use [Remote Technician](../remote-technician/overview.md) to access a device EWS for any devices tracked by this install.

### Device default settings
The settings are applicable only to devices in your entity's hierarchy.

!!! example "Device alerts"

    #### Check for alert frequency (in minutes) (number)
    This setting determines how often an install should scan the meter reads looking for potential supply or service alerts. This number should usually be at least 60 (minutes) because meters are collected for devices every hour. Any value lower then 60 would be redundant.

    ---

    !!! example "Supply alerts"

        #### Low supply alerts (toggle)
        Determines whether low supply alerts are enabled. Low supply alerts will always be created and viewable in the web admin, this setting applies only to supply alert notifications such as email alerts.

        ---
    
        #### Notification emails (for low supply alerts) (emails)
        Any number of email addresses that low supply alerts should be sent to.

        ---

        #### Alert threshold (number)
        When the percent of supply remaining crosses this threshold, a supply alert is created. If a supply replacement is detected before it reaches this threshold, the replacement is considered to be a premature cartridge replacement (PCR).

        ---
    
        #### Replacement (toggle)
        Determines whether supply replacement alerts are sent. A supply replacement alert occurs when an install has detected that a supply has been replaced.

        ---

        #### Notification emails (for replacement alerts) (emails)
        Any number of email addresses that replacement alerts should be sent to.
        
        ---
    
        #### Premature replacement (toggle)
        Determines whether premature cartirdige replacement (PCR) alerts are sent. A PCR alert occurs when an install has detected that a supply has been replaced before it has crossed the alert threshold.

        ---

        #### Notification emails (for premature replacement alerts) (emails)
        Any number of email addresses that premature cartridge replacement alerts should be sent to.

    !!! example "Service alerts"

        #### Maintenance supply alert
        Determines whether maintenance kit or drum cartridge alerts are sent.

        ---

        #### Alert threshold
        When a maintenance kit or drum crosses this alert threshold, a maintenance alert is created.

        ---

        #### Service alert emails
        Any number of email addresses that maintenance or drum alerts should be sent to.

    !!! example "Volume alerts"

        #### Volume threshold alerts (toggle)
        Determines whether volume threshold alerts are sent.

        ---

        #### Recurring (toggle)
        When enabled, volume alerts will be sent every time the total page counter crosses a frequency threshold.

        ---

        #### Next alert at (number)
        Determines the value that the total page counter must reach in order to fire the next volume alert. If recurring volume alerts are enabled, this value is updated to reflect the value of the next volume alert every time the total page counter crosses a frequency threshold.

        ---

        #### Frequency (number)
        This value is only applicable if recurring volume alerts are enabled. It determines how often (in page counts) a volume alert should be fired.

        ---

        #### Volume alert emails (emails)
        Any number of email addresses that volume alerts should be sent to.

!!! example "Billing preferences"
    
    These settings are covered in greater detail in [billing meters](../billing-preferences/billing-meters.md) and [billing schedule](../billing-preferences/billing-schedule.md).

!!! example "Auto-fulfillment"

    These settings are covered in greater detail in [auto-fulfillment](../auto-fulfillment/supplies-network.md)

!!! example "Shared default settings"
    
    These settings are shared between both the installs and the devices.

    !!! example "SNMP"
        
        SNMP settings are shared between installs and devices for different reasons. Installs use SNMP settings for device discovery, whereas devices use SNMP settings for data collection. Both SNMPv1 and SNMPv3 settings are used when attempting to connect to a device.

        #### Max retries (number)
        The maxmimum number of retries used when attempting to connect to a device using the SNMP protocol.

        ---

        #### Timeout (in milliseconds) (number)
        The maxmimum amount of time an install will wait for a response from the device per-retry.

        ---

        #### Community string (string)
        The SNMP community string.

        ---

        #### Version (single-option)
        The SNMP version, which is either v1, v2 or v3.
