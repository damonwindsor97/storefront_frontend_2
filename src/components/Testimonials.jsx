import TestimonialCard from "./TestimonialCard"

const Reviews = [
  {
    "id": 1,
    "stars": 0,
    "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laboriosam rerum molestias blanditiis neque repellat ipsa d.",
    "name": "Jane Doe"
  },
  {
    "id": 2,
    "stars": 0,
    "review": "Thanks to this product I am top10 in Valorant leaderboards",
    "name": "Tenz"
  },
  {
    "id": 3,
    "stars": 0,
    "review": "Missile strikes have never been easier,  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, nam.",
    "name": "Barack Obama"
  },
  {
    "id": 4,
    "stars": 0,
    "review": "Once in vietnam I took an ice cream to a little boy, his name was toby but his hair smelt like flowers.",
    "name": "Joe Biden"
  },
  {
    "id": 5,
    "stars": 0,
    "review": "+ Rep, I'm now #1 in Fortnite and just won the most money in my life",
    "name": "Booga"
  },
  {
    "id": 6,
    "stars": 0,
    "review": "Great product, raging for 3 months without a ban",
    "name": "Celium"
  },
]

function Testimonials() {
  return (
    <div>
      <div className="max-w-[1120px] mx-auto">
        <p className="text-center text-xl m-16 text-white ">Checkout how much better our customers are at gaming now</p>

        <div>
          <div className=" md:grid md:grid-cols-3 md:gap-2">
            {Reviews.map(review => (
              <div className="m-2" key={review.id}>
                <TestimonialCard
                  stars={review.stars}
                  review={review.review}
                  name={review.name}
                />
              </div>
            ))}
          </div>


        </div>
      </div>
    </div>
  )
}

export default Testimonials