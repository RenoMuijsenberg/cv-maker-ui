import styles from "../../styles/components/One/SliderContainer.module.scss";
import Slider from "react-slick";

export const SliderContainer = ({projectImages}: {projectImages: any}) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (

        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                {
                    projectImages.length > 0 &&
                    projectImages.map((item: any, key: number) => {
                        return (
                            <div key={key}>
                                <img src={item.path} alt={item.alt}/>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}