import React from "react";

import workContent from "./data/workContent";

export default function App() {
    return (
        <div>
        <div className="flex flex-row justify-between h-32 m-2">
        <img src="images/white-logo.svg" className="m-2" alt="" />
        <div className="flex -left-0 p-2 font-semibold">
          <a href="https://twitter.com/irisvanollefen" className="p-3 m-1"
            ><img src="images/twitter.svg" alt=""
          /></a>
          <a href="https://github.com/IrisvanOllefen" className="p-3 m-1">
            <img src="images/github.svg" alt=""
          /></a>
        </div>
      </div>
      <section className="m-4">
      <h1 className="text-5xl font-medium py-2">Hi. I am Iris.</h1>
      <h2 className="text-4xl py-2">Frontend Developer & UX Designer</h2>
      <div className="mt-2 mb-11">
        <a href="#" className="text-lg text-purple-400 font-semibold"
          >Learn more about me</a>
      </div>
    </section>

        {workContent.map((content) => (
            <div key={content.title} className="bg-purple-200 px-5 py-5 mx-4 my-6 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-center">{content.title}</h3>
            <h4 class="text-lg font-medium text-center">
              {content.subTitle}
            </h4>
            <h4 className="text-center text-base">{content.productType}</h4>
            <img src={content.productImg} alt="Picture of Product" className="py-2" />
            <a href="#" className="font-semibold text-center">{content.productUrl}</a>
            <h5 className="pt-3 font-semibold">Focus Points</h5>
            <ul className="pt-1 pl-2">
              <li>{content.focusPointOne}</li>
              <li>{content.focusPointTwo}</li> 
              <li>{content.focusPointThree}</li>
            </ul>
          </div>
        ))}

    </div>

    );
}