// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"

// import required modules
import { EffectCards } from "swiper/modules"
import Image from "next/image"
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react"

const CardSwiper = (props) => {
  const { trainings } = props

  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        loop={true}
        className="mySwiper my-6"
      >
        {trainings === null ? (
          <Typography variant="small" className="mt-8">
            Training not found...
          </Typography>
        ) : Array.isArray(trainings) && trainings.length > 0 ? (
          trainings.map(({ label }, index) => (
            <div
              key={index}
              className="lg:grid lg:grid-cols-2 lg:gap-4 overflow-hidden"
            >
              <CardSwiper cardsList={trainings} />
            </div>
          ))
        ) : (
          <Typography variant="small" className="mt-8">
            loading...
          </Typography>
        )}
      </Swiper>
    </div>
  )
}

export default CardSwiper
