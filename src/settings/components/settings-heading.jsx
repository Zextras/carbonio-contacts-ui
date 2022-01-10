/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import React from 'react';
import { Padding, Row, Text, Divider } from '@zextras/zapp-ui';

export default function Heading({ title }) {
	return (
		<>
			<Row
				padding={{ all: 'small' }}
				mainAlignment="baseline"
				crossAlignment="baseline"
				width="100%"
			>
				<Text size="large" weight="bold">
					{title}
				</Text>
			</Row>
			{/* <Divider /> */}
			<Padding veritcal="small" />
		</>
	);
}
