import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import useFetch from '../../../../hooks/useFetch';
const ListThumbs = ({ productID }: any) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const { data, isLoading } = useFetch(`http://localhost:8080/thumb/${productID}`)

    if (isLoading) {
        return (
            <>Loading...</>
        )
    } else {
        const arrThumb = data
        console.log(arrThumb)
        return (
            <div className="product-img row">
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                    modules={[Navigation, Thumbs]}
                    className="thumbnail"
                >

                    {arrThumb.map((thumb: any, index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <img className='thumb' src={thumb.thumbnail} alt="" />
                            </SwiperSlide>
                        )
                    })}
                    {/* <SwiperSlide>
                    <img className='thumb' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='thumb' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00375837-849f-4f17-ba24-d201d27be49b/air-force-1-07-shoes-WrLlWX.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='thumb' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3cc96f43-47b6-43cb-951d-d8f73bb2f912/air-force-1-07-shoes-WrLlWX.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='thumb' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-shoes-WrLlWX.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='thumb' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/air-force-1-07-shoes-WrLlWX.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='thumb' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1c1e5f55-99c2-4522-b398-2352e01ba566/air-force-1-07-shoes-WrLlWX.png" alt="" />
                </SwiperSlide> */}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    // spaceBetween={10}
                    slidesPerView={6}
                    spaceBetween={10}
                    freeMode={true}
                    watchSlidesProgress={false}
                    modules={[FreeMode, Thumbs]}
                    className='list'
                >
                    {arrThumb.map((thumb: any, index: number) => {
                        return (
                            <SwiperSlide key={index}>
                                <img className='list-thumb' src={thumb.thumbnail} alt="" />
                            </SwiperSlide>
                        )
                    })}
                    {/* <SwiperSlide>
                    <img className='list-thumb' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='list-thumb' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00375837-849f-4f17-ba24-d201d27be49b/air-force-1-07-shoes-WrLlWX.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='list-thumb' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3cc96f43-47b6-43cb-951d-d8f73bb2f912/air-force-1-07-shoes-WrLlWX.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='list-thumb' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-shoes-WrLlWX.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='list-thumb' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/air-force-1-07-shoes-WrLlWX.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='list-thumb' src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1c1e5f55-99c2-4522-b398-2352e01ba566/air-force-1-07-shoes-WrLlWX.png" alt="" />
                </SwiperSlide> */}
                </Swiper>
            </div>
        );
    }
}

export default ListThumbs;