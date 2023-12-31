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

import { classes } from "@utils/misc";
import { findByPropsLazy } from "@webpack";
import { Tooltip } from "@webpack/common";

const iconClasses = findByPropsLazy("button", "wrapper", "disabled", "separator");

export function DeleteButton({ onClick }: { onClick(): void; }) {
    return (
        <Tooltip text="Delete Review">
            {props => (
                <div
                    {...props}
                    className={classes(iconClasses.button, iconClasses.dangerous)}
                    onClick={onClick}
                >
                    <svg width="16" height="16" viewBox="0 0 20 20">
                        <path fill="currentColor" d="M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z" />
                        <path fill="currentColor" d="M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z" />
                    </svg>
                </div>
            )}
        </Tooltip>
    );
}

export function ReportButton({ onClick }: { onClick(): void; }) {
    return (
        <Tooltip text="Report Review">
            {props => (
                <div
                    {...props}
                    className={iconClasses.button}
                    onClick={onClick}
                >
                    <svg width="16" height="16" viewBox="0 0 20 20">
                        <path fill="currentColor" d="M20,6.002H14V3.002C14,2.45 13.553,2.002 13,2.002H4C3.447,2.002 3,2.45 3,3.002V22.002H5V14.002H10.586L8.293,16.295C8.007,16.581 7.922,17.011 8.076,17.385C8.23,17.759 8.596,18.002 9,18.002H20C20.553,18.002 21,17.554 21,17.002V7.002C21,6.45 20.553,6.002 20,6.002Z" />
                    </svg>
                </div>
            )}
        </Tooltip>
    );
}
