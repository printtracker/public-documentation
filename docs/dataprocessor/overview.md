# Data Processor
The Print Tracker data processor automatically synchronizes meter reads into ERP platforms such as ECi E-Automate using configurable [billing schedules](../webadmin/billing-preferences/billing-schedule.md). 

Our most common data processor integration is with E-Automate. Most modern ERP platforms do not require a dedicated data processor and can use [scheduled reports](../webadmin/reporting-and-analysis/custom-reports.md) instead. For more information, please reach out to support directly.

Integrations with E-Automate require that the data processor is installed on a machine that has direct SQL database access with the E-Automate database. If you self-host E-Automate, this means the data processor must be installed on a machine on your network. If you cloud-host E-Automate, this means that the data processor can either be installed on your own network, or you can use a Print Tracker hosted data processor service. 

## System Requirements
||Minimum|Recommended|
|--|--|--|
|Operating System|Windows||
|CPU|2.5GHz x 2 cores|3GHz x 8 cores|
|Memory|4GB|16GB|
|Disk|10GB HDD|10GB SSD|
|Other Considerations|The data processor should not be installed on a laptop or any other machine that frequently shuts down, or the reliability may be affected||

## Pre-requisites
Setting up a data processor involves scheduling a Zoom meeting with one of our technicians. Prior to this meeting, there are some steps you can take on your own to make the setup process quick and easy.

### Self-hosted E-Automate
1. Setup a computer or virtual machine to run the data processor.
2. Make sure that the E-Automate SQL server is accessible from this computer or virtual machine.
3. Create a SQL user account with `EXEC` permissions for the data processor. If you have questions about this, don't worry, we can use an existing SQL user account, or we can help you create one during the setup call.
4. Create an E-Automate meter source.

### Cloud-hosted E-Automate
Connecting a data processor to a cloud-hosted instance of E-Automate usually requires a three-way agreement between ECi, Print Tracker and you. This agreement confirms that you are allowing Print Tracker to sync your Print Tracker data into E-Automate. Print Tracker can help to facilitate this agreement.

1. Make sure that the E-Automate SQL server is accessible from this computer or virtual machine.
2. Obtain a SQL user account with `EXEC` permissions for the data processor from ECi.
3. Create an E-Automate meter source
