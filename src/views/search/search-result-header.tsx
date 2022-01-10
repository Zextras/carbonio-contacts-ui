/*
 * SPDX-FileCopyrightText: 2021 Zextras <https://www.zextras.com>
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import React from 'react';
import { Container, Text } from '@zextras/zapp-ui';
import { useTranslation } from 'react-i18next';

type SearchResultsHeaderProps = {
	searchString: Array<{ label: string }>;
	resultsCount: number | undefined;
};

const SearchResultsHeader = ({ searchString, resultsCount }: SearchResultsHeaderProps): any => {
	const [t] = useTranslation();
	return (
		<Container
			orientation="horizontal"
			background="gray4"
			mainAlignment="flex-start"
			minWidth="256px"
			height="fit"
			padding={{ all: 'large' }}
		>
			<Container
				orientation="horizontal"
				width="fit"
				mainAlignment="flex-start"
				padding={{ left: 'medium' }}
			>
				<Text size="large" color="secondary">
					{t('search.results_for', 'Results for:')}
				</Text>
			</Container>
			<Container
				orientation="horizontal"
				width="fill"
				mainAlignment="space-between"
				padding={{ left: 'extrasmall' }}
			>
				<Text size="large" weight="bold">
					{searchString.map((i) => i.label).join(' ')}
				</Text>
				<Text width="fill" mainAlignment="right" size="large">
					{resultsCount}
				</Text>
			</Container>
		</Container>
	);
};

export default SearchResultsHeader;
