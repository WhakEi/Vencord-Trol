/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { findStoreLazy } from "@webpack";
import { GenericStore } from "@webpack/common";

const PoggerModeSettingsStore: GenericStore = findStoreLazy("PoggermodeSettingsStore");

const enum Intensity {
    Normal,
    Better,
    ProjectX,
}

const settings = definePluginSettings({
    superIntensePartyMode: {
        description: "Party intensity",
        type: OptionType.SELECT,
        options: [
            { label: "Normal", value: Intensity.Normal, default: true },
            { label: "Better", value: Intensity.Better },
            { label: "Project X", value: Intensity.ProjectX },
        ],
        restartNeeded: false,
        onChange: setSettings
    },
});

export default definePlugin({
    name: "Party mode 🎉",
    description: "Allows you to use party mode cause the party never ends ✨",
    authors: [Devs.UwUDev],
    settings,

    start() {
        setPoggerState(true);
        setSettings(settings.store.superIntensePartyMode);
    },

    stop() {
        setPoggerState(false);
    },
});

function setPoggerState(state: boolean) {
    Object.assign(PoggerModeSettingsStore.__getLocalVars().state, {
        enabled: state,
        settingsVisible: state
    });
}

function setSettings(intensity: Intensity) {
    const state = {
        screenshakeEnabledLocations: { 0: true, 1: true, 2: true },
        shakeIntensity: 1,
        confettiSize: 16,
        confettiCount: 5,
        combosRequiredCount: 1
    };

    switch (intensity) {
        case Intensity.Normal: {
            Object.assign(state, {
                screenshakeEnabledLocations: { 0: true, 1: false, 2: false },
                combosRequiredCount: 5
            });
            break;
        }
        case Intensity.Better: {
            Object.assign(state, {
                confettiSize: 12,
                confettiCount: 8,
            });
            break;
        }
        case Intensity.ProjectX: {
            Object.assign(state, {
                shakeIntensity: 20,
                confettiSize: 25,
                confettiCount: 15,
            });
            break;
        }
    }

    Object.assign(PoggerModeSettingsStore.__getLocalVars().state, state);
}
