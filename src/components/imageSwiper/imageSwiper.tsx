import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Attachment } from '../../models/attachment';
import { Scrollbar } from 'swiper/modules';

type ImageSwiperProps = {
    images:Attachment[]
}

const ImageSwiper  = (props: ImageSwiperProps)=>{
    return (
        <>
            <div className='w-full rounded-2xl overflow-hidden'>
                <Swiper modules={[Scrollbar]} spaceBetween={50} scrollbar={{ draggable: true }}>
                    {props.images.map((image)=> <SwiperSlide key={image.url}><img src={image.url} /></SwiperSlide>)}
                </Swiper>
            </div>
        </>
    )
}

export default ImageSwiper;