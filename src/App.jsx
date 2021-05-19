import React from "react";

import workContent from "./data/workContent";
import skillsContent from "./data/skillsContent";

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
            <img src={content.productImg} alt="Picture of Product" className="py-4 w-full md:w-1/2" />
            <a href={content.productUrl} className="font-semibold underline">{content.urlName}</a>
            <h5 className="pt-3 font-semibold">Focus Points</h5>
            <ul className="pt-1">
              <li className="pt-1 pb-1">{content.focusPointOne}</li>
              <li className="pt-1 pb-1">{content.focusPointTwo}</li> 
              <li className="pt-1 pb-1">{content.focusPointThree}</li>
            </ul>
          </div>
        ))}

        {skillsContent.map((content) => (
          <div key={content.skillName} className="px-5 py-5 mx-4 my-6">
            <h3 className="text-2xl font-semibold text-left">About me</h3>
            <p className="pt-4"> I started studying <strong>Communication and Multimedia Design</strong> at the University of Applied Science in Amsterdam in the fall of 2018 but my story started before that. I've always been known as a very creative person and also took coding classes in high school. Nobody was surprised that this was the type of higher education I decided to follow. 
            </p>
            <p className="pt-4">My interest first was more towards <strong>graphic design</strong>, but soon I discovered how interesting <strong>user experience designing</strong> was. When the coding related classes started, I really started enjoying that too. In my third year of CMD I followed a half semester of coding classes and learned more parts of the full stack development. I know some things about the back end, and find it very interesting, but I know my power will be in front end development for now. I wish to learn more.  </p>
            <p className="pt-4">As a designer, I think about the end user whilst designing and always keep them in mind. When you have me on your team, my way of working is often considered trial and error, but it all comes down to a good end product with a nice process behind it. </p>
            <h3 className="text-2xl font-semibold text-left pt-4">Skills</h3>
            <h3 className="text-2xl font-semibold text-left pt-4">Other Things I Enjoy</h3>
            <ul className="pt-1">
              <li className="pt-1 pb-1"><strong>Baking & Cooking</strong> - Making food for friends and family is something I love! Whilst growing up I spend a lot of time in the kitchen, and I still do. I experiment with dinners and am always interested in exploring new cuisines from different parts of the world. As for baking, let's say I don't just bake something where there is a big party and something big to celebrate. </li>
              <li className="pt-1 pb-1"><strong>Singing and Making Music </strong> - Growing up I spend a lot of time with music around. My mother is a pianist and my dad spent his free time as a sound tech. I have been singing for as long as I can remembeer and also play the guitar, drums, and piano.</li> 
              <li className="pt-1 pb-1"><strong>Reading</strong> - I love reading! It is probably my favorite hobby. I read whenever I get the chance, whilst on the train or when I am bored. I love discussing books and recommending books to friends and family. My current favorites? <a href="https://www.amazon.nl/No-Rules-Netflix-Culture-Reinvention/dp/075355366X/ref=pd_sim_1/262-0363464-2070633?pd_rd_w=Y5i3U&pf_rd_p=f4f8374b-da40-4a9e-a900-016494b065c2&pf_rd_r=EG7DM0YC1ZGAD1FTTHXF&pd_rd_r=071d780b-fd8b-44ff-8030-20f0bbadf1a2&pd_rd_wg=cBsiI&pd_rd_i=075355366X&psc=1" className="underline" >No Rules Rules: Netflix and the Culture of Reinvention (non-fiction)</a> and <a href="https://www.amazon.nl/Klara-sun-Kazuo-Ishiguro-hardback/dp/057136487X/ref=pd_lpo_14_img_0/262-0363464-2070633?_encoding=UTF8&pd_rd_i=057136487X&pd_rd_r=e4800294-06ab-4ef9-987a-293d379635cb&pd_rd_w=q8NkS&pd_rd_wg=CCXyr&pf_rd_p=2951dfa1-e419-4f22-a882-089216593818&pf_rd_r=1YHY4X6MSDVAM24AT2D3&psc=1&refRID=1YHY4X6MSDVAM24AT2D3" className="underline">Never Let Me Go (fiction)</a></li>
            </ul>
            <h3 className="text-2xl font-semibold text-left pt-4">Resumé</h3>
            <h3 className="text-2xl font-semibold text-left pt-4">Contact</h3>
          </div>
       
        ))}

    </div>

    );
}