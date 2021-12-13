# Meters
The data processor is responsible for synchronizing meter reads (collected and stored in Print Tracker) into your ERP system. Normally this process happens based on a device's [billing schedule](../webadmin/billing-preferences/billing-schedule.md). The data processor will periodically check for billing periods that have ended and sync those meter reads into your ERP.

## Manual Sync
If you need to get meter reads synced into your ERP outside a devices billing schedule, you can manually sync the device's current meter read.

### Single Device
To sync meter reads for a single device:

1. In the top navigation bar, click **Devices**.
2. In the left-hand table that contains Print Tracker devices, search for the device that you'd like to manually sync meters for.
3. On the right-hand side of the row containing the device you're looking for, click the **three-dot button**.
4. This opens a context menu, click on **Import Current Meter**. Note that if the device has not been linked with an ERP device, you cannot import meter reads for the device.

### All Devices
To sync meter reads for all devices:

1. In the top navigation bar, click **Meters**.
2. In the top-left corner click **Import From Print Tracker**. This opens a context menu.
3. Click **Current Meter Read**.
