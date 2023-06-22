# Modded Vencord


The funniest Discord client mod


## Installing / Uninstalling

**WARNING:** This has not been tested on Windows, so far it's only been verified to work in ubuntu, instructions may vary depending on OS or Distro.
**Sidenote:** You will need node.js.

Install `pnpm`:

> :exclamation: This next command may need to be run as admin/root depending on your system, and you may need to close and reopen your terminal for pnpm to be in your PATH.

```shell
npm i -g pnpm
```

> :exclamation: **IMPORTANT** Make sure you aren't using an admin/root terminal from here onwards. It **will** mess up your Discord/Vencord instance and you **will** most likely have to reinstall.

Clone Vencord:

```shell
git clone https://github.com/WhakEi/Vencord-Trol
cd Vencord-Trol
```

Install dependencies: 
```shell
pnpm install --frozen-lockfile
```
Build Vencord: 
```shell
pnpm build
```
Inject vencord into your client: 
```shell
pnpm inject
```

## Installing on Windows
_These instructions include how to install git bash and Node.js, if you have already done this, skip over to step 4_

 1. [Download node.js from here](https://nodejs.org/en/download/)
 2. [Download Git Bash from here](https://git-scm.com/downloads)
 3. Install both of them
 4. Open Windows Powershell
 5. Do `git clone https://github.com/WhakEi/Vencord-Trol`
 6. Then do `cd Vencord-Trol`
 7. Install pnpm `npm install pnpm`
 8. Install dependencies `pnpm install --frozen-lockfile`
 9. Build Vencord-Trol `pnpm build`
 10. Run the installer `pnpm inject`

_Note:_ If you already have Vencord, click uninstall then reinstall
Then fully close Discord from your taskbar or task manager, and restart it. Vencord should be injected - you can check this by looking for the Vencord section in Discord settings.

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
