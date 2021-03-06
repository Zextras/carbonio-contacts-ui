/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
export type ModalFooterProps = {
	mainAlignment?: string | undefined;
	crossAlignment?: string | undefined;
	padding?: Record<string, string> | undefined;
	onConfirm: (a: string) => void;
	secondaryAction?: () => void | undefined;
	label: string;
	secondaryLabel?: string | undefined;
	disabled?: boolean | undefined;
	secondaryDisabled?: boolean | undefined;
	background?: string | undefined;
	secondarybackground?: string | undefined;
	color?: string | undefined;
	secondaryColor?: string | undefined;
	size?: string | undefined;
	primaryBtnType?: string | undefined;
	secondaryBtnType?: string | undefined;
	divider?: boolean;
	verticalPadding?: string;
	secondaryVerticalPadding?: string;
	showDivider?: boolean;
	tooltip?: string;
	secondaryTooltip?: string;
	paddingTop?: string;
};
