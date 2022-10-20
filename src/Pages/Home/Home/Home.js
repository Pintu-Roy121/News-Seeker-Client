import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummery from '../../Shared/NewsSummery/NewsSummery';

const Home = () => {
    const AllNews = useLoaderData();

    return (
        <div>
            <h3>Total News : {AllNews.length}</h3>
            {
                AllNews.map(news => <NewsSummery
                    key={news._id}
                    news={news}
                ></NewsSummery>)
            }
        </div>
    );
};

export default Home;