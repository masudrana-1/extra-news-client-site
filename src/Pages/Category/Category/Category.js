import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {

    const categoryNews = useLoaderData();

    // dynamic title 
    useTitle('Category');

    return (
        <div>
            <h4>This is category has news: {categoryNews.length}</h4>
            <div>
                {
                    categoryNews.map(news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
                }
            </div>
        </div>
    );
};

export default Category;