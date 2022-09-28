import React from "react";
import { Layout } from "../../layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Disclosure, Transition } from "@headlessui/react";
import { AiFillCaretDown } from "react-icons/ai";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "./styles.css";

const Home = () => {
  const servicesData = [
    {
      id: 1,
      picture: require("../../common/assets/services/illustration-a-min.png"),
      pictureOnHover: require("../../common/assets/services/illustration-b-min.png"),
      name: "Illustration",
      desc: "Unique illustrative and fresh cartoon logo design for the web &/or print!",
      backGround: "bg-[#C0A080]",
    },
    {
      id: 2,
      picture: require("../../common/assets/services/logo-design-a-min.png"),
      pictureOnHover: require("../../common/assets/services/logo-design-b-min.png"),
      name: "Logo Design",
      desc: "Creating memorable corporate mascot logos for big and small companies.",
      backGround: "bg-[#DACC96]",
    },
    {
      id: 3,
      picture: require("../../common/assets/services/web-design-a.png"),
      pictureOnHover: require("../../common/assets/services/web-design-b.png"),
      name: "Web Design",
      desc: "I draw monkeys… but also creative corporate websites. SOSFactory V4 is the proof!",
      backGround: "bg-[#F3C5C5]",
    },
    {
      id: 4,
      picture: require("../../common/assets/services/mascot-design-a-min.png"),
      pictureOnHover: require("../../common/assets/services/mascot-design-b-min.png"),
      name: "Web Design",
      desc: "As a Top Talent, I create nice and easy to use interfaces, with a focus on gamification.",
      backGround: "bg-[#C1A3A3]",
    },
  ];
  const faqList = [
    {
      title: "HOW MANY REVISIONS DO YOU OFFER IN YOUR DESIGN PROCESS?",
      content: `I offer a premium custom design service and I guarantee full satisfaction. Revisions will be the necessary in order to achieve the objective set.

            My design process is sequential so we’ll do the work in stages – briefing, conceptualisation, sketch and final design – and we’ll make all the revisions you need (within reason) but when one stage is approved we can’t turn back again. If it happens I may charge a fee.
            
            `,
    },
    {
      title: "WILL YOU REFUND MY MONEY IF I DON'T LIKE YOUR WORK?",
      content: `If I can’t deliver perfection then I will charge just for the work you approved so until you approve the preliminary sketch, you are elegible for a full refund.`,
    },
    {
      title: "WHO OWNS THE COPYRIGHT OF MY DESIGNS?",
      content: `Copyright of the final work is yours upon receipt of final payment. By default I reserve the right to claim the authorship of the artwork, meaning that once the designs are public I can list it in my social networks and portfolio.

      Any unapproved sketch created during your order, that of course is different enough to the final design, belongs to me.
      
      `,
    },
    {
      title: "CAN YOU KEEP MY DESIGN PROJECT CONFIDENTIAL?",
      content: `My portfolio is my only marketing tool so otherwise stated, I keep the right to display the outcome of any design order in the SOSFactory portfolio, blog or social profiles in order to promote my work.

      If you need a Non-Disclosure Agreement signed by me, please let me know upfront as it may chance the price of the service.`,
    },
    {
      title: "CAN I MAKE MODIFICATIONS TO MY DESIGN?",
      content: `Art is very personal and requires expert skills, it’s also about style, if you make changes it could lose all consistency.

        If after your project is finished you want make any change I suggest you contact me to discuss your new needs, I will do everything on my hand to achieve your new goals at the minimum cost.`,
    },
    {
      title: "WHICH PAYMENT METHODS CAN I USE TO ORDER MY COMPANY BRANDING?",
      content: `The most common and quick payment is PayPal, altough I also accept bank transfer or any other secure payment method like Western Union.`,
    },
    {
      title:
        "I CAN'T AFFORD YOUR SERVICES... CAN YOU OFFER ME MORE AFFORDABLE SOLUTIONS?",
      content: `Yes, from time to time I like to create mascot and logos just for fun,  a way to monetise this hobby is selling it as royalty stock design.

        Otherwise stated you can use this design for commercial purposes as long as you don’t sell it, license it or redistribute it.`,
    },
  ];
  const imageSrc = [
    { id: 1, src: require("../../common/assets/projects/1.png") },
    { id: 2, src: require("../../common/assets/projects/2.png") },
    { id: 3, src: require("../../common/assets/projects/3.png") },
    { id: 4, src: require("../../common/assets/projects/4.png") },
    { id: 5, src: require("../../common/assets/projects/5.png") },
    { id: 6, src: require("../../common/assets/projects/6.png") },
    { id: 7, src: require("../../common/assets/projects/7.png") },
    { id: 8, src: require("../../common/assets/projects/8.png") },
    { id: 9, src: require("../../common/assets/projects/9.jpg") },
    { id: 10, src: require("../../common/assets/projects/10.jpg") },
    { id: 11, src: require("../../common/assets/projects/11.jpg") },
    { id: 12, src: require("../../common/assets/projects/12.png") },
    { id: 13, src: require("../../common/assets/projects/13.png") },
    { id: 14, src: require("../../common/assets/projects/14.jpg") },
    { id: 15, src: require("../../common/assets/projects/15.png") },
    { id: 16, src: require("../../common/assets/projects/16.jpg") },
  ];

  const logoSrc = [
    {
      id: 1,
      src: require("../../common/assets/projects/hasbro-logo.png"),
    },
    {
      id: 2,
      src: require("../../common/assets/projects/nestle-logo.png"),
    },
    {
      id: 3,
      src: require("../../common/assets/projects/salesforce-logo.png"),
    },
    {
      id: 4,
      src: require("../../common/assets/projects/toyota-logo.png"),
    },
    {
      id: 5,
      src: require("../../common/assets/projects/mccormick-logo.png"),
    },
    {
      id: 6,
      src: require("../../common/assets/projects/maersk-logo.png"),
    },
  ];
  const trackRecord = [
    { title: "CUSTOMERS", number: 378 },
    { title: "ORDERS", number: 804 },
    { title: "REFUNDS", number: 12 },
    { title: "%REFUND", number: 2 },
  ];
  return (
    <Layout>
      {/* Jumbotron */}
      <section className="container flex lg:flex-row flex-col h-auto w-[100%]">
        <div className="bg-[#E4E2DE]  lg:w-[50%] w-full p-12 space-y-12 flex flex-col">
          <h1 className="font-semibold text-4xl">
            Hello👋, <br /> my name is Sergio Ordonez
          </h1>
          <p>I am a Designer & Illustrator</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sit
            voluptatem fugiat, delectus recusandae repellendus commodi ab
            dolores, eligendi non, laborum nemo doloribus voluptatibus
            dignissimos. Sed nostrum consectetur deleniti iure!
          </p>
          <button className=" mx-auto rounded-lg bg-black text-white p-2 hover:bg-transparent hover:text-black border-black border-2 transform transition duration-500">
            <p className="font-semibold">PORTFOLIO</p>
          </button>
        </div>
        <div className="bg-[#DDD5B6] w-full lg:w-[50%] p-12 space-y-10 flex flex-col">
          <div className="flex lg:flex-row flex-col gap-x-2 gap-y-2">
            <img
              src="/images/school-b.png"
              className="h-[300px] w-[280px] bg-[#E4E2DE] rounded-xl"
              alt=""
            />
            <div className="space-y-5">
              <h1 className="font-semibold">
                HOW I MADE A LIVING FROM MY ART…
              </h1>
              <p>
                My journey began in 2003 due to an accident, followed by many
                other “accidents”: thanks to numerous tight budget clients and
                endless nights of Photoshop I grew from a newbie comic artist
                into who I am today.
              </p>
            </div>
          </div>
          <button className="mx-auto rounded-lg bg-black text-white p-2 hover:bg-transparent hover:text-black border-black border-2 transform transition duration-500">
            <p className="font-semibold">ABOUT ME</p>
          </button>
        </div>
      </section>
      {/* Design Services */}
      <section className="container space-y-4 p-8">
        <p className="mx-auto text-center p-8 text-white bg-black text-lg md:text-2xl lg:text-4xl font-semibold rounded-lg">
          DESIGN SERVICES I PROVIDE
        </p>
        <p className="text-center">
          A selection of my preferred projects I have created during the last 15
          years.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesData.map((item) => (
            <div
              className={`${item.backGround} rounded-lg px-4 pb-4 space-y-6 flex lg:flex-row flex-col items-center`}
            >
              <img
                className="lg:h-[200px] lg:w-[200px] h-[100px] w-[100px]"
                style={{
                  transition: "all 1s",
                }}
                src={item.picture}
                onMouseOver={(e) => (e.currentTarget.src = item.pictureOnHover)}
                onMouseOut={(e) => (e.currentTarget.src = item.picture)}
                alt=""
              />
              <div className="space-y-2 flex flex-col">
                <h1 className="font-bold text-base text-center lg:text-left">{item.name}</h1>
                <p className="text-sm text-center lg:text-left">{item.desc}</p>
                <button className="rounded-lg mx-auto lg:ml-0 bg-black text-white p-2 hover:bg-transparent hover:text-black border-black border-2 transform transition duration-500">
                  <p className="font-semibold">MORE</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Graphic Design Projects */}
      <section className="bg-[#EDDFB3] container space-y-4 p-8 relative flex flex-col">
        {" "}
        <p className="rounded-lg mx-auto text-center p-8 text-white bg-black text-lg md:text-2xl lg:text-4xl font-semibold w-full">
          FEATURED GRAPHIC DESIGN PROJECTS
        </p>
        <p className="text-center">
          A selection of my preferred projects I have created during the last 15
          years.
        </p>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            type: "bullets",
            clickable: true,
            bulletActiveClass: "swiper-bullet",
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {imageSrc.map((item) => (
            <SwiperSlide className="items-center flex">
              <img src={item.src} alt="" className="w-[300px] h-[300px]" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="grid lg:grid-cols-6 grid-cols-2">
          {logoSrc.map((item) => (
            <img src={item.src} alt="" />
          ))}
        </div>
        <div className="flex md:flex-row flex-col gap-12">
          {trackRecord.map((item) => (
            <div className="bg-[#DDD5B6] text-[#3c3a2e] text-4xl text-center p-10 font-semibold rounded-lg space-y-4">
              <h1>{item.number}</h1>
              <hr className="h-1 mx-auto w-[60px] bg-[#3c3a2e]" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          <h1 className="text-center text-2xl mt-20">
            NOT ENOUGH PORTFOLIO SAMPLES?
          </h1>
          <p className="text-center text-lg">
            Enjoy some case studios, rationalisation behind my choices or work
            in progress images.
          </p>
        </div>
        <button className="mx-auto rounded-lg bg-black text-white p-2 hover:bg-transparent hover:text-black border-black border-2 transform transition duration-500">
          <p className="font-semibold">VISIT MY PORTOFOLIO</p>
        </button>
      </section>
      {/* FAQ */}
      <section className="container space-y-10 p-8 bg-[#E4E2DE]">
        <p className="mx-auto text-center p-8 text-white bg-black text-lg md:text-2xl lg:text-4xl font-semibold rounded-lg">
          FREQUENTLY ASKED QUESTIONS
        </p>
        {/* disclosure */}
        <div className="flex lg:flex-row-reverse flex-col-reverse mt-11 gap-y-10 justify-evenly">
          <section className="w-full lg:px-4 lg:w-[37rem] space-y-4">
            {faqList.map((item) => (
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white shadow-md px-4 py-2 text-left text-base lg:text-lg font-semibold focus:outline-none">
                      <span className="lg:w-3/4 w-4/5">{item.title}</span>
                      <AiFillCaretDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-4 w-4 text-black`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 leading-loose bg-white shadow-md rounded-lg">
                        {item.content}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </section>
          <div className="w-full md:w-96 md:max-w-full">
            <div className="p-6 rounded-lg bg-white shadow-xl">
              <form method="POST" action="https://herotofu.com/start">
                <label className="block mb-6">
                  <span className="text-gray-700">Your name</span>
                  <input
                    type="text"
                    name="name"
                    className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Enter Your Name"
                  />
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">Email address</span>
                  <input
                    name="email"
                    type="email"
                    className="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    placeholder="Enter Your Email"
                    required
                  />
                </label>
                <label class="block mb-6">
                  <span class="text-gray-700">Message</span>
                  <textarea
                    name="message"
                    class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                    rows="3"
                    placeholder="Tell us what you're thinking about..."
                  ></textarea>
                </label>
                <div class="mb-6">
                  <button
                    type="submit"
                    className="mx-auto bg-black text-white p-2 hover:bg-transparent hover:text-black border-black border-2 transform transition duration-500 rounded-lg"
                  >
                    <p className="font-semibold">CONTACT US</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
