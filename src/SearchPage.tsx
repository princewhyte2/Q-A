/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppState,
  searchingQuestionsAction,
  searchedQuestionsAction,
} from './Store';
import { useSearchParams } from 'react-router-dom';
import { QuestionList } from './QuestionList';
import { searchQuestions } from './QuestionsData';
import React from 'react';
import { Page } from './Page';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  // const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const questions = useSelector((state: AppState) => state.questions.searched);
  const search = searchParams.get('criteria') || '';

  React.useEffect(() => {
    const doSearch = async (criteria: string) => {
      dispatch(searchingQuestionsAction());
      const foundResults = await searchQuestions(criteria);
      dispatch(searchedQuestionsAction(foundResults));
      //setQuestions(foundResults);
    };

    doSearch(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <Page title="Search Results">
      {search && (
        <p
          css={css`
            font-size: 16px;

            font-style: italic;

            margin-top: 0px;
          `}
        >
          for '{search}'
        </p>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};
