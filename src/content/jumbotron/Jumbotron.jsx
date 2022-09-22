import React from "react";

function Jumbotron() {
  return (
    <section className="container flex flex-row h-auto w-[100%]">
      <div className="bg-[#D8BAFF] w-[50%] p-12 space-y-12 border-2 border-black border-l-0 flex flex-col">
        <h1 className="font-semibold text-4xl">Hello👋, <br/> my name is Sergio Ordonez</h1>
        <p>I am a Designer & Illustrator</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sit voluptatem fugiat, delectus recusandae repellendus commodi ab dolores, eligendi non, laborum nemo doloribus voluptatibus dignissimos. Sed nostrum consectetur deleniti iure!</p>
        <button className=" mx-auto bg-black text-white p-2 hover:bg-transparent hover:text-black border-black border-2 transform transition duration-500"><p className="font-semibold">PORTFOLIO</p></button>
      </div>
      <div className="bg-[#F7CB45] w-[50%] border-2 border-l border-r-0 border-black p-12 space-y-10 flex flex-col">
        <div className="flex flex-row gap-x-2">
        <img src="/images/school-b.png" className="h-[300px] w-[280px] bg-[#D8BAFF] border-black border-4" alt=""/>
        <div className="space-y-5">
          <h1 className="font-semibold">HOW I MADE A LIVING FROM MY ART…</h1>
          <p>My journey began in 2003 due to an accident, followed by many other “accidents”: thanks to numerous tight budget clients and endless nights of Photoshop I grew from a newbie comic artist into who I am today.</p>
        </div>
        </div>
        <button className="mx-auto bg-black text-white p-2 hover:bg-transparent hover:text-black border-black border-2 transform transition duration-500"><p className="font-semibold">ABOUT ME</p></button>
      </div>
    </section>
  );
}

export default Jumbotron;
