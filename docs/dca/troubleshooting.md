# Troubleshooting
The following tips and tricks should help you address situations where an install is not reporting. In nearly every case, an install is not reporting because the host machine does not meet the [system requirements](./system-requirements.md#system-requirements) or the network that the host machine is connected to, does not meet the [network requirements](./system-requirements.md#network-requirements). Before working through the steps found below, please ensure that your host machines are compatible and that the necessary domains and protocols have been whitelisted for your network.

## Installation
### Installer Fails
In some cases, the installer will fail to install Print Tracker Pro with the following error message, "There is a problem with windows installer package.  A program run as part of this setup did not finish as expected."

1. Determine if your host machine or network requires proxy settings to connect to the internet. The [following resource from Stack Overflow](https://stackoverflow.com/questions/22368515/how-to-see-the-proxy-settings-on-windows/46183424) may be helpful in identifying whether your system currently has configured proxy settings.
2. If proxy settings are in use, try using our [offline installer](https://www.cdn.printtrackerpro.com/modules/installer/PrintTrackerProOfflineSetup.msi).

## Falling offline
In some cases, an install may fall offline after the initial installation and registration.

### Antivirus
To verify if an antivirus program has removed Print Tracker Pro:

1. Open **Windows File Explorer**.
2. Navigate to **C:\Program Files (x86)\Print Tracker Pro**.
3. You should see a list of files and folders, if the `printtrackerpro.exe` file is missing, it has likely been removed by an antivirus program.
4. Your antivirus program should log which "threats" it has removed. To determine what antivirus you have, [refer to this resource from Microsoft](https://www.microsoft.com/security/blog/2014/02/21/how-do-i-know-if-i-already-have-antivirus-software/).

### Network Filters
In some cases Print Tracker Pro will be running, but be unable to connect to the internet to report meters and supply information:

1. Verify Print Tracker Pro is running by right-clicking on the Windows start menu and clicking **Task Manager**.
2. Click on the **Processes** tab if it is not already selected.
3. Ensure that `printtrackerpro.exe` is in the list of running processes.
4. Navigate to [http://localhost:1301/](http://localhost:1301/), to open the install's local user interface.
5. Click **Test Connectivity** and ensure that all tests are passing.
6. If any tests fail, request that the person or team responsible for network security review Print Tracker Pro's [network requirements](./system-requirements.md#network-requirements) (specifically the requirements for gRPC protocol support) to determine what systems might be blocking Print Tracker Pro from connecting to the internet.
