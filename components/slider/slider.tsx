import styles from "./slider.module.css"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {IProject} from "../../interfaces/IProject";

interface PropTypes {
	projectImages: IProject[]
}
export default function Slider({projectImages}: PropTypes) {
	const [emblaRef] = useEmblaCarousel({
		loop: true,
		align: 'start',
		containScroll: "trimSnaps",
	}, [Autoplay()])

	return (
		<div className={styles.embla}>
			<div className={styles.embla__viewport} ref={emblaRef}>
				<div className={styles.embla__container}>
					{
						projectImages.length > 0 &&
						projectImages.map((item: any, key: number) => {
							return (
								<div key={key} className={styles.embla__slide}>
									<Image width={450} height={400} className={styles.embla__slide__img} src={item.path} alt={item.alt} loading={"lazy"}/>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}