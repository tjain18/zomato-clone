import { isContentEditable } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { nightLife } from '../../data/nightlife';
import Collection from '../common/collection';
import ExploreSection from '../common/exploreSection';
import Filters from '../common/filters';
import "./nightlife.css";

const nightFilters = [
    {
        id: 1,
        icon: <i className="fa-solid fa-filter absolute-center"></i>,
        title: "Filters",
    },
    {
        id: 2,
        title: "Rating 4.0+",
    },
    {
        id: 3,
        title: "Safe and Hygienic",
    },
    {
        id: 4,
        title: "Pubs & Bars",
    },
    {
        id: 5,
        title: "Delivery Time",
        icon: <i className="fa-solid fa-clock absolute-center"></i>,
    },
    {
        id: 6,
        title: "Pro Offers",
    },
];

const collectionList = [
    {
        id: 3,
        title: "Newly Opened",
        cover: "https://b.zmtcdn.com/data/collections/031c2dd47d839ff2bf98dbb66147ab4f_1648708839.jpg?output-format=webp",
        places: "19 places",
    },
    {
        id: 4,
        title: "Live Cricket Screening",
        cover: "https://b.zmtcdn.com/data/collections/e2ceb701e81a8113eab9627069f6f6bf_1649145041.jpg?output-format=webp",
        places: "42 places",
    },
    {
        id: 5,
        title: "Best pizza places in town",
        cover: "https://b.zmtcdn.com/data/collections/f6e7f7d903d6499e1420d755ddc0ab11_1647253868.jpg?output-format=webp",
        places: "29 places",
    },
    {
        id: 6,
        title: "Brilliant biriyanis",
        cover: "https://b.zmtcdn.com/data/collections/121c28675e83cd77ae12f5904580f241_1647256967.jpg?output-format=webp",
        places: "28 places",
    },
    {
        id: 7,
        title: "Darshini",
        cover: "https://b.zmtcdn.com/data/collections/3ec0a1d41a727287821715478cb6ee2b_1633438403.jpg?output-format=webp",
        places: "29 places",
    },
    {
        id: 8,
        title: "Flavours of Punjab",
        cover: "https://b.zmtcdn.com/data/collections/81d955a89e9530661ed96b0373dcbe9f_1647258270.jpg?output-format=webp",
        places: "30 places",
    },
    {
        id: 1,
        title: "Trending this week",
        cover: "https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040546.png?output-format=webp",
        places: "30 places",
    },
    {
        id: 2,
        title: "Best of bengaluru",
        cover: "https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg?output-format=webp",
        places: "114 places",
    },
];

const nightList = nightLife;

const Nightlife = () => {
    return (
        <div>
            <Collection list={collectionList} />
            <div className='max-width'>
                <Filters filterList={nightFilters} />
            </div>
            <ExploreSection list={nightList} collectionName='Nightlife restaurants in Bangalore' />
        </div>
    );
};

export default Nightlife;