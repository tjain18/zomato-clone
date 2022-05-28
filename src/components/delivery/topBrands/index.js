import React from 'react';
import Slider from 'react-slick/lib/slider';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import "./topBrands.css";

const brandList = [
    {
        id: 1,
        time: "37 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png",
    },
    {
        id: 2,
        time: "29 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png",
    },
    {
        id: 3,
        time: "42 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png",
    },
    {
        id: 4,
        time: "20 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/526e7511008f07f7d630549c7c5809b1_1638685733.png",
    },
    {
        id: 5,
        time: "56 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/08da44392a73e7e9db7be1e47863f07d_1605502580.png",
    },
    {
        id: 6,
        time: "24 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/b9ffb4c181468da1f2b0eebd9ba70415_1643780686.png",
    },
    {
        id: 7,
        time: "48 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f5ec900ea5a4e20049adbe5cbe1f6181_1602222836.png",
    },
    {
        id: 8,
        time: "36 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155163.png",
    },
    {
        id: 9,
        time: "40 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/758bfb8c0aafb453e405adf29e227419_1649945345.png",
    },
    {
        id: 10,
        time: "30 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/e58364e86ce96c4b9c798bc25c8a7c42_1629952929.png",
    },
];

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const TopBrands = () => {
    return (
        <div className='top-brands max-width'>
            <div className='collection-title'>Top brands for you</div>
            <Slider {...settings}>
                {brandList.map((brand) => {
                    return <div>
                        <div className='top-brands-cover'>
                            <img src={brand.cover}
                                className='top-brands-image'
                                alt={brand.time} />
                            <div>{brand.time}</div>
                        </div>
                    </div>;
                })}
            </Slider>

        </div>
    );
};

export default TopBrands;