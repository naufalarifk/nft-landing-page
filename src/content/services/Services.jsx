import React from "react";

function Services() {
  const servicesData = [
    {
      id: 1,
      picture: require("../../common/assets/services/illustration-a-min.png"),
      pictureOnHover: require("../../common/assets/services/illustration-b-min.png"),
      name: "Illustration",
      desc: "Unique illustrative and fresh cartoon logo design for the web &/or print!",
      backGround: "bg-[#FF9988]",
    },
    {
      id: 2,
      picture: require("../../common/assets/services/logo-design-a-min.png"),
      pictureOnHover: require("../../common/assets/services/logo-design-b-min.png"),
      name: "Logo Design",
      desc: "Creating memorable corporate mascot logos for big and small companies.",
      backGround: "bg-[#FFD2F9]",
    },
    {
      id: 3,
      picture: require("../../common/assets/services/web-design-a.png"),
      pictureOnHover: require("../../common/assets/services/web-design-b.png"),
      name: "Web Design",
      desc: "I draw monkeys… but also creative corporate websites. SOSFactory V4 is the proof!",
      backGround: "bg-[#D8BAFF]",
    },
    {
      id: 4,
      picture: require("../../common/assets/services/mascot-design-a-min.png"),
      pictureOnHover: require("../../common/assets/services/mascot-design-b-min.png"),
      name: "Web Design",
      desc: "As a Top Talent, I create nice and easy to use interfaces, with a focus on gamification.",
      backGround: "bg-[#BAD6FF]",
    },
  ];

  return (
    <section className="container space-y-4 p-8">
      <p className="mx-auto text-center p-8 text-white bg-black text-4xl font-semibold">
        Design Services I Provide
      </p>
      <p className="text-center">
        A selection of my preferred projects I have created during the last 15
        years.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* {servicesData.map((item) => (
          <div className="text-[#3c3a2e] px-8">
            <p className="text-center">{item.name}</p>
            <p className="text-center">{item.desc}</p>
            <div className="mx-auto mt-5 border-2 border-[#3c3a2e] hover:bg-[#3c3a2e] hover:text-white transform transition duration-500 w-1/2 py-2">
              <p className="text-center">MORE</p>
            </div>
          </div>
        ))} */}
        {servicesData.map((item) => (
          <div
            className={`${item.backGround} border-2 border-black rounded-lg px-4 pb-4 space-y-4 flex flex-row items-center`}
          >
            <img
            className="h-[200px] w-[200px]"
            style={{
              transition: "all 1s"
            }}
              src={item.picture}
              onMouseOver={(e) => (e.currentTarget.src = item.pictureOnHover)}
              onMouseOut={(e) => (e.currentTarget.src = item.picture)}
              alt=""
            />
            <div>
              <h1 className="font-bold">{item.name}</h1>
              <p>{item.desc}</p>
              <button className="mx-auto bg-black text-white p-2 hover:bg-transparent hover:text-black border-black border-2 transform transition duration-500">
                <p className="font-semibold">MORE</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
