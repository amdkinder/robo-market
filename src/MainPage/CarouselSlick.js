import React from 'react';
import { Carousel } from 'react-materialize';

export const HeaderSlick = () => {
const imgArr = [
'https://picsum.photos/200/300?image=0',
'https://picsum.photos/200/300?image=1',
'https://picsum.photos/200/300?image=2',
];

return (
    <Carousel
        className='tabs'
        options={{ duration: 100, indicators: true }}
        images={imgArr}
    />
);
}