import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function MyCarousel() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex  md:w-1/2 md:flex lg:felx lg:1/3 ">
        <Carousel
          infiniteLoop
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          autoPlay
          interval={2000}
        >
          <div>
            <img alt="" src="src/assets/gluten-free_punk_-_1050x1050_1_1.png" />
          </div>
          <div>
            <img alt="" src="src/assets/arcade_made_1050x1050_1_7.png" />
          </div>
          <div>
            <img alt="" src="src/assets/hazypassionfruit_3.png" />
          </div>
          <div>
            <img alt="" src="src/assets/hazy_jane_guava_4.png" />
          </div>
          <div>
            <img alt="" src="src/assets/headliner_hazy_jane_1__2.png" />
          </div>
          <div>
            <img alt="" src="src/assets/blueprint_digitalassets_1.8_1_.png" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
