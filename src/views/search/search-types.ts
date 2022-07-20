/*
 * SPDX-FileCopyrightText: 2022 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
export type Query = Array<{
	label: string;
	value?: string;
	isGeneric?: boolean;
	isQueryFilter?: boolean;
}>;
