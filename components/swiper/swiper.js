// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Swipe = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView="auto"
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints= {{

          // when window width is <= 499px
          499: {
              slidesPerView: 1,
              spaceBetweenSlides: 50
            },
            // when window width is <= 999px
            699: {
                slidesPerView: 2,
                spaceBetweenSlides: 50
            },
            999: {
                slidesPerView: 3,
                spaceBetweenSlides: 50
            }
        }
    }

    >
      <SwiperSlide>
      <img src='workimg/microservice.webp' className='w-full h-60'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src='workimg/dbimg.png' className='w-full h-60'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src='workimg/cloudcomputing-og.jpg' className='w-full h-60'/>
      </SwiperSlide>
      <SwiperSlide>
      <img src='workimg/orchestration.jpg' className='w-full h-60'/>
      </SwiperSlide>

    </Swiper>
  );
};

export default Swipe