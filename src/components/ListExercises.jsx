import { Card, CardBody, Typography } from "@material-tailwind/react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import { EffectCoverflow, Pagination } from "swiper/modules"
import { PencilSquareIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const ListExercises = (props) => {
  const { exercises } = props

  return (
    <div
      className="mx-auto py-8 w-full max-w-5xl format format-sm sm:format-base 
     lg:format-lg format-blue dark:format-invert text-center items-center bg-transparent relative  overflow-hidden"
    >
      <Typography variant="h2" color="white">
        Your exercises
      </Typography>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 items-center overflow-hidden mt-6">
        {exercises === null ? (
          <Typography variant="small" className="mt-8">
            Exercises not found...
          </Typography>
        ) : Array.isArray(exercises) && exercises.length > 0 ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {exercises.map(({ id, label, bodyPart }, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={{
                    pathname: `./${id}`,
                  }}
                >
                  <Card
                    className="w-full max-w-[21rem] mx-auto px-16"
                    style={{
                      backgroundImage: `url(${bodyPart}.jpg)`,
                      backgroundSize: "cover",
                    }}
                  >
                    <CardBody key={index}>
                      <div className="flex justify-between bg-white py-2 px-4 rounded-xl shadow-xl">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-2 uppercase"
                        >
                          {label}
                        </Typography>
                        <PencilSquareIcon className="h-8 w-8 text-gray-900" />
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Typography variant="small" className="mt-8">
            exercises not found...
          </Typography>
        )}
      </div>
    </div>
  )
}

export default ListExercises
