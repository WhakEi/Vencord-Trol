/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
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
import { makeRange } from "@components/PluginSettings/components/SettingSliderComponent";
import { Devs } from "@utils/constants";
import { sleep } from "@utils/misc";
import definePlugin, { OptionType } from "@utils/types";
import { SelectedChannelStore, UserStore } from "@webpack/common";
import { Message, ReactionEmoji } from "discord-types/general";

interface IMessageCreate {
    type: "MESSAGE_CREATE";
    optimistic: boolean;
    isPushNotification: boolean;
    channelId: string;
    message: Message;
}

interface IReactionAdd {
    type: "MESSAGE_REACTION_ADD";
    optimistic: boolean;
    channelId: string;
    messageId: string;
    userId: "195136840355807232";
    emoji: ReactionEmoji;
}

interface IVoiceChannelEffectSendEvent {
    type: string;
    emoji?: ReactionEmoji; // Just in case...
    channelId: string;
    userId: string;
    animationType: number;
    animationId: number;
}

const TROL = ":trol:";
const TROL_URL =
    "https://cdn.discordapp.com/attachments/1053260361391952048/1119591480424677426/KBfOdh3.mp3";

const settings = definePluginSettings({
    volume: {
        description: "Volume of the :trol: sound",
        type: OptionType.SLIDER,
        markers: makeRange(0, 1, 0.1),
        default: 0.5,
        stickToMarkers: false
    },
    triggerWhenUnfocused: {
        description: "Trigger the :trol: sound even when the window is unfocused",
        type: OptionType.BOOLEAN,
        default: true
    },
    ignoreBots: {
        description: "Ignore bots",
        type: OptionType.BOOLEAN,
        default: true
    }
});

export default definePlugin({
    name: "Trol",
    authors: [Devs.Megu, Devs.Nuckyz],
    description: "Trol sound effect",
    settings,

    flux: {
        async MESSAGE_CREATE({ optimistic, type, message, channelId }: IMessageCreate) {
            if (optimistic || type !== "MESSAGE_CREATE") return;
            if (message.state === "SENDING") return;
            if (settings.store.ignoreBots && message.author?.bot) return;
            if (!message.content) return;
            if (channelId !== SelectedChannelStore.getChannelId()) return;

            const trolCount = getTrolCount(message.content);

            for (let i = 0; i < trolCount; i++) {
                boom();
                await sleep(300);
            }
        },

        MESSAGE_REACTION_ADD({ optimistic, type, channelId, userId, emoji }: IReactionAdd) {
            if (optimistic || type !== "MESSAGE_REACTION_ADD") return;
            if (settings.store.ignoreBots && UserStore.getUser(userId)?.bot) return;
            if (channelId !== SelectedChannelStore.getChannelId()) return;

            const name = emoji.name.toLowerCase();
            if (name !== TROL && !name.includes("trol")) return;

            boom();
        },

        VOICE_CHANNEL_EFFECT_SEND({ emoji }: IVoiceChannelEffectSendEvent) {
            if (!emoji?.name) return;
            const name = emoji.name.toLowerCase();
            if (name !== TROL && !name.includes("trol")) return;

            boom();
        }
    }
});

function countOccurrences(sourceString: string, subString: string) {
    let i = 0;
    let lastIdx = 0;
    while ((lastIdx = sourceString.indexOf(subString, lastIdx) + 1) !== 0)
        i++;

    return i;
}

function countMatches(sourceString: string, pattern: RegExp) {
    if (!pattern.global)
        throw new Error("pattern must be global");

    let i = 0;
    while (pattern.test(sourceString))
        i++;

    return i;
}

const customTrolRe = /<a?:\w*tro?l\w*:\d{17,20}>/gi;

function getTrolCount(message: string) {
    const count = countOccurrences(message, TROL)
        + countMatches(message, customTrolRe);

    return Math.min(count, 10);
}

function boom() {
    if (!settings.store.triggerWhenUnfocused && !document.hasFocus()) return;
    const audioElement = document.createElement("audio");
    audioElement.src = TROL_URL;
    audioElement.volume = settings.store.volume;
    audioElement.play();
}