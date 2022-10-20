import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummery from '../../Shared/NewsSummery/NewsSummery';

const Category = () => {
    const categoryNews = useLoaderData();
    // console.log(categoryNews);
    return (
        <div>
            <h3>Total News Category: {categoryNews.length}</h3>
            {
                categoryNews.map(news => <NewsSummery
                    key={news._id}
                    news={news}
                ></NewsSummery>)
            }
        </div>
    );
};

export default Category;