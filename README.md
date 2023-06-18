# Modded Vencord


The funniest Discord client mod


## Installing / Uninstalling

**WARNING:** This has not been tested on Windows, so far it's only been verified to work in ubuntu, instructions may vary depending on OS and Distro.
**Sidenote:** You will need node.js
Install pnpm: 
:exclamation: This next command may need to be run as admin/root depending on your system, and you may need to close and
reopen your terminal for pnpm to be in your PATH. 
npm i -g pnpm
 :exclamation: IMPORTANT Make sure you aren’t using an admin/root terminal from here onwards. It will mess up your Discord
Vencord instance and you will most likely have to reinstall. 
Clone Vencord: 
git clone https://github.com/WhakEi/Vencord-Trol
cd Vencord-Trol

Install dependencies: 
pnpm install --frozen-lockfile

Build Vencord: 
pnpm build

Inject vencord into your client: 
pnpm inject
_Note:_ If you already have Vencord, click uninstall then reinstall


## Disclaimer

Discord is trademark of Discord Inc. and solely mentioned for the sake of descriptivity.
Mention of it does not imply any affiliation with or endorsement by Discord Inc.

<details>
<summary>Using Vencord violates Discord's terms of service</summary>

Client modifications are against Discord’s Terms of Service.

However, Discord is pretty indifferent about them and there are no known cases of users getting banned for using client mods! So you should generally be fine as long as you don’t use any plugins that implement abusive behaviour. But no worries, all inbuilt plugins are safe to use!

Regardless, if your account is very important to you and it getting disabled would be a disaster for you, you should probably not use any client mods (not exclusive to Vencord), just to be safe

Additionally, make sure not to post screenshots with Vencord in a server where you might get banned for it

</details>
