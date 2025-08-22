"use client";

import Image from "next/image";
import Logo from "./logo";
import Hero from "./Hero";
import {
  ChevronLeft,
  ChevronRight,
  Mountain,
  Music,
  Paintbrush,
  Book,
  Utensils,
  Dumbbell,
  Globe,
  Camera,
  Clapperboard,
  Brush,
  Palette,
  Plane,
  Calendar,
  Brain,
  Users,
  Sparkle,
  Gamepad2,
  ShoppingCart,
  HeartPulse,
  Sun,
  Leaf,
  Bike,
  MapPin,
  LucideBike,
  LucidePartyPopper,
  LucideGem,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Noise, useNoiseConfig } from "react-noise";
import "react-noise/css";
import AvatarsSection from "./AvatarsSection";
import Gutter from "./Gutter";

const Section2 = () => {
  return (
    <div className="w-full pt-20 pb-28 md:py-32">
      <div className="w-full flex max-lg:flex-col justify-between lg:items-end  sm:gap-5">
        <h2 className="sm:text-2xl xl:text-3xl text-xl font-medium max-md:text-pretty">
          No endless scrolling. No boring plans.
          <br className="max-md:hidden" />
          <span className="inline-block w-12 md:w-14 lg:w-17 align-middle mx-1.5">
            <Logo />
          </span>
          is the easiest way to <span className="text-brand/80">find and</span>
          <br className="max-md:hidden" />{" "}
          <span className="text-brand/80">book experiences</span> that match
          your vibe.
        </h2>
        <p className="lg:text-sm max-sm:text-xs text-zinc-500 mt-5 sm:mt-0 max-w-[280px] leading-5 text-pretty">
          Come solo or bring friends!
          <br className="max-sm:hidden" /> Got something amazing to host? We’ll
          help you fill the room.
        </p>
      </div>

      <div className="w-full mt-12 flex gap-3 max-sm:min-h-[50vh] h-fit">
        <div className="flex flex-col gap-3 flex-1">
          <Image
            alt=""
            width={500}
            height={300}
            objectFit="cover"
            className="w-full h-auto"
            src={"/people-looking-down-at-camera.png?value=2"}
          />
          <div className="w-full h-full rounded-lg bg-[#F4F4F4] flex items-center justify-center py-10">
            <svg
              className="w-[80px]"
              viewBox="0 0 94 113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.44846 22.7047L0.83598 27.435L10.2966 34.6599L13.9091 29.9296L9.17878 26.3171L4.44846 22.7047ZM62.9327 26.3171L61.4771 32.0884L62.9327 26.3171ZM64.5112 9.11563L62.0806 3.68258L62.0806 3.68258L64.5112 9.11563ZM45.1093 31.8005L39.2688 30.654L45.1093 31.8005ZM72.9735 28.0664L72.2359 33.9724L72.2359 33.9724L72.9735 28.0664ZM9.17878 26.3171L13.9091 29.9296L18.3872 24.0658L13.6569 20.4534L8.92655 16.8409L4.44846 22.7047L9.17878 26.3171ZM39.2204 16.0474L36.3199 21.2448C45.1308 26.1618 50.1747 29.2377 61.4771 32.0884L62.9327 26.3171L64.3883 20.5459C54.7622 18.118 50.9342 15.7683 42.1208 10.8499L39.2204 16.0474ZM62.9327 26.3171L61.4771 32.0884C64.7035 32.9021 68.5508 33.5122 72.2359 33.9724L72.9735 28.0664L73.7111 22.1603C70.2132 21.7234 66.9211 21.1847 64.3883 20.5459L62.9327 26.3171ZM86.3061 13.0641L91.0849 9.516C82.967 -1.41753 69.8148 0.222463 62.0806 3.68258L64.5112 9.11563L66.9418 14.5487C72.6196 12.0086 78.382 12.376 81.5274 16.6123L86.3061 13.0641ZM64.5112 9.11563L62.0806 3.68258C55.3957 6.67323 50.2025 10.1971 46.3865 14.7855C42.5342 19.4175 40.4351 24.7132 39.2688 30.654L45.1093 31.8005L50.9498 32.947C51.8427 28.3985 53.2848 25.1075 55.5388 22.3972C57.8291 19.6433 61.3073 17.0694 66.9418 14.5487L64.5112 9.11563ZM45.1093 31.8005L39.2688 30.654C37.6496 38.9025 37.3013 49.0885 37.3231 56.966C37.3342 60.9559 37.4414 64.4531 37.5458 66.9558C37.5981 68.2083 37.6498 69.2147 37.6887 69.9128C37.7082 70.2619 37.7245 70.5341 37.7362 70.7216C37.742 70.8154 37.7466 70.888 37.7499 70.9384C37.7515 70.9637 37.7528 70.9834 37.7537 70.9975C37.7542 71.0045 37.7546 71.0101 37.7549 71.0143C37.755 71.0164 37.7551 71.0181 37.7552 71.0195C37.7553 71.0202 37.7553 71.021 37.7553 71.0213C37.7554 71.022 37.7554 71.0226 43.6938 70.6215C49.6323 70.2204 49.6323 70.2208 49.6323 70.2211C49.6323 70.2211 49.6324 70.2213 49.6323 70.2213C49.6323 70.2212 49.6323 70.2208 49.6323 70.2201C49.6322 70.2186 49.632 70.2156 49.6317 70.2113C49.6311 70.2026 49.6302 70.1884 49.6289 70.1687C49.6263 70.1292 49.6224 70.0679 49.6173 69.9856C49.6071 69.8212 49.5923 69.5732 49.5742 69.2493C49.538 68.6014 49.4891 67.6509 49.4394 66.4595C49.3398 64.0742 49.2376 60.7354 49.227 56.9329C49.2056 49.2255 49.5651 40.0011 50.9498 32.947L45.1093 31.8005ZM72.9735 28.0664L72.2359 33.9724C78.8083 34.7932 85.3779 32.2252 89.5042 27.976C91.6122 25.8053 93.3181 22.9456 93.7899 19.5792C94.2791 16.0886 93.3597 12.5798 91.0849 9.516L86.3061 13.0641L81.5274 16.6123C82.052 17.3189 82.0308 17.7161 82.0012 17.9271C81.9542 18.2625 81.7244 18.9003 80.9644 19.683C79.3546 21.3407 76.4584 22.5034 73.7111 22.1603L72.9735 28.0664ZM13.6569 20.4534L18.3872 24.0658C22.2801 18.9683 29.8417 17.6296 36.3199 21.2448L39.2204 16.0474L42.1208 10.8499C31.3763 4.85387 17.0044 6.26348 8.92655 16.8409L13.6569 20.4534Z"
                fill="#58B2AD"
              />
              <path
                d="M22.0186 106.774C20.1735 106.774 18.8151 106.415 17.9434 105.695C17.0716 104.976 16.6357 103.833 16.6357 102.268V95.5771H13.7793V93.1143H16.6357V89.6611H20.0381V93.1143H24.3799V95.5771H20.0381V101.887C20.0381 102.775 20.2539 103.402 20.6855 103.766C21.1257 104.13 21.8451 104.312 22.8438 104.312C23.1146 104.312 23.3854 104.299 23.6562 104.273C23.9355 104.24 24.1768 104.206 24.3799 104.172V106.584C24.0583 106.643 23.6943 106.69 23.2881 106.724C22.8818 106.757 22.4587 106.774 22.0186 106.774ZM29.3184 111.078C28.929 111.078 28.5609 111.057 28.2139 111.015C27.8669 110.981 27.5579 110.934 27.2871 110.875V108.374C27.5072 108.425 27.7526 108.467 28.0234 108.501C28.2943 108.535 28.5736 108.552 28.8613 108.552C29.5638 108.552 30.1605 108.442 30.6514 108.222C31.1507 108.002 31.5697 107.612 31.9082 107.054L32.2383 106.47L25.5732 93.1143H29.1787L34.3965 104.21L33.7363 103.626H34.6377L33.9775 104.21L38.9541 93.1143H42.5088L36.1104 106.394C35.5433 107.545 34.9466 108.463 34.3203 109.148C33.7025 109.834 32.9915 110.325 32.1875 110.621C31.3835 110.926 30.4271 111.078 29.3184 111.078ZM51.3193 106.863C49.5843 106.863 48.0947 106.588 46.8506 106.038C45.6064 105.488 44.6501 104.692 43.9814 103.651C43.3128 102.61 42.9785 101.354 42.9785 99.8809V99.8682C42.9785 98.4294 43.3171 97.181 43.9941 96.123C44.6797 95.0651 45.6318 94.2484 46.8506 93.6729C48.0693 93.0889 49.4954 92.8011 51.1289 92.8096C52.7878 92.818 54.2096 93.1185 55.3945 93.7109C56.5879 94.2949 57.502 95.1201 58.1367 96.1865C58.7799 97.2445 59.1016 98.4886 59.1016 99.9189V100.63H44.6924V98.5605H56.9941L55.8643 100.173V99.3857C55.8643 98.5394 55.6738 97.8073 55.293 97.1895C54.9206 96.5716 54.3831 96.0977 53.6807 95.7676C52.9782 95.4375 52.1403 95.2725 51.167 95.2725C50.1429 95.2725 49.2669 95.4375 48.5391 95.7676C47.8112 96.0892 47.2526 96.5716 46.8633 97.2148C46.4824 97.8496 46.292 98.6367 46.292 99.5762V100.109C46.292 101.15 46.5205 101.988 46.9775 102.623C47.4346 103.249 48.0482 103.706 48.8184 103.994C49.597 104.273 50.4603 104.413 51.4082 104.413C52.0599 104.413 52.665 104.345 53.2236 104.21C53.7907 104.066 54.2816 103.859 54.6963 103.588C55.111 103.317 55.4157 102.995 55.6104 102.623L55.6611 102.534H58.8984L58.8604 102.661C58.6488 103.33 58.3145 103.926 57.8574 104.451C57.4089 104.967 56.8503 105.408 56.1816 105.771C55.5215 106.127 54.7809 106.398 53.96 106.584C53.139 106.77 52.2588 106.863 51.3193 106.863ZM68.4453 106.863C66.8711 106.863 65.5254 106.698 64.4082 106.368C63.2995 106.038 62.4362 105.564 61.8184 104.946C61.2005 104.32 60.8324 103.571 60.7139 102.699L60.7012 102.598H64.04L64.0654 102.687C64.2178 103.313 64.6579 103.783 65.3857 104.096C66.1221 104.409 67.1546 104.565 68.4834 104.565C69.279 104.565 69.9476 104.498 70.4893 104.362C71.0309 104.218 71.4414 104.015 71.7207 103.753C72.0085 103.482 72.1523 103.16 72.1523 102.788V102.775C72.1523 102.318 71.9661 101.971 71.5938 101.734C71.2214 101.497 70.5697 101.328 69.6387 101.227L65.9189 100.846C64.8525 100.719 63.9639 100.494 63.2529 100.173C62.542 99.8428 62.0088 99.4196 61.6533 98.9033C61.2979 98.3786 61.1201 97.7607 61.1201 97.0498V97.0371C61.1201 96.1569 61.391 95.4036 61.9326 94.7773C62.4827 94.1426 63.2656 93.6559 64.2812 93.3174C65.2969 92.9788 66.5114 92.8096 67.9248 92.8096C69.4144 92.8096 70.6839 92.9788 71.7334 93.3174C72.7829 93.6475 73.5954 94.1214 74.1709 94.7393C74.7464 95.3571 75.068 96.0892 75.1357 96.9355L75.1484 97.0752H72L71.9873 96.999C71.8942 96.415 71.4964 95.9538 70.7939 95.6152C70.0915 95.2767 69.1436 95.1074 67.9502 95.1074C67.1969 95.1074 66.5622 95.1794 66.0459 95.3232C65.5296 95.4587 65.1361 95.6576 64.8652 95.9199C64.6029 96.1823 64.4717 96.4997 64.4717 96.8721V96.8848C64.4717 97.1725 64.5563 97.418 64.7256 97.6211C64.8949 97.8242 65.1615 97.9935 65.5254 98.1289C65.8978 98.2559 66.3844 98.3574 66.9854 98.4336L70.7432 98.8145C72.4528 99.0007 73.68 99.3942 74.4248 99.9951C75.1781 100.596 75.5547 101.438 75.5547 102.521V102.534C75.5547 103.423 75.2712 104.193 74.7041 104.845C74.137 105.496 73.3203 105.996 72.2539 106.343C71.196 106.69 69.9264 106.863 68.4453 106.863ZM79.6299 106.749C79.0798 106.749 78.6185 106.571 78.2461 106.216C77.8822 105.852 77.7002 105.408 77.7002 104.883C77.7002 104.358 77.8822 103.918 78.2461 103.562C78.6185 103.199 79.0798 103.017 79.6299 103.017C80.18 103.017 80.637 103.199 81.001 103.562C81.3734 103.918 81.5596 104.358 81.5596 104.883C81.5596 105.408 81.3734 105.852 81.001 106.216C80.637 106.571 80.18 106.749 79.6299 106.749Z"
                fill="#58B2AD"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col flex-1 max-md:hidden">
          <div className="flex w-full h-full md:p-8 lg:p-16 justify-center items-center overflow-hidden rounded-2xl bg-[#f4f4f4]">
            <Image
              src="/tyes-event-UI-example.png"
              alt=""
              width={300}
              height={500}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <Image
            src={"/tyes-icon-on-iphone.png"}
            width={300}
            height={600}
            alt=""
            className="w-full h-auto flex-1 object-cover rounded-lg"
            objectFit="cover"
          />
          <Image
            src={"/people-on-couch.png"}
            width={300}
            height={600}
            alt=""
            className="w-full h-auto flex-1 object-cover rounded-lg"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

const categories = [
  {
    img: "https://images.unsplash.com/photo-1653501464974-5d981067a13d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc2VydCUyMHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D",
    cateogry: "Adventure & Outdoor",
    Icon: Mountain,
  },
  {
    img: "https://images.unsplash.com/photo-1611094607507-8c8173e5cf33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cateogry: "Fitness",
    Icon: Dumbbell,
  },
  {
    img: "https://images.unsplash.com/photo-1614107070261-2aa1304618f6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cateogry: "Art",
    Icon: Paintbrush,
  },
  {
    img: "https://images.unsplash.com/photo-1628336704853-9e8c932ac8f2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cateogry: "Luxury",
    Icon: LucideGem,
  },
  {
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cateogry: "Food & Drink",
    Icon: Utensils,
  },
  {
    img: "https://images.unsplash.com/photo-1506601905416-f8802ad753ed?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cateogry: "Music",
    Icon: Music,
  },
  {
    img: "https://images.unsplash.com/photo-1628354215124-dd0ab72828ac?q=80&w=1713&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cateogry: "Travel",
    Icon: Plane,
  },
  {
    img: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=900&auto=format&fit=crop&q=60",
    cateogry: "Photography",
    Icon: Camera,
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=60",
    cateogry: "Film & Theater",
    Icon: Clapperboard,
  },
  {
    img: "https://images.unsplash.com/photo-1514361892635-cebbffcdf9ea?w=900&auto=format&fit=crop&q=60",
    cateogry: "Nightlife",
    Icon: LucidePartyPopper,
  },
  {
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=900&auto=format&fit=crop&q=60",
    cateogry: "Crafts",
    Icon: Brush,
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=900&auto=format&fit=crop&q=60",
    cateogry: "Painting",
    Icon: Palette,
  },
  {
    img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?w=900&auto=format&fit=crop&q=60",
    cateogry: "Air & Travel",
    Icon: Plane,
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60",
    cateogry: "Events",
    Icon: Calendar,
  },
  {
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&auto=format&fit=crop&q=60",
    cateogry: "Workshops",
    Icon: Brain,
  },
  {
    img: "https://images.unsplash.com/photo-1428173495094-7c3b00dd7982?w=900&auto=format&fit=crop&q=60",
    cateogry: "Social",
    Icon: Users,
  },
  {
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&auto=format&fit=crop&q=60",
    cateogry: "Wellness",
    Icon: Sparkle,
  },
  {
    img: "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?w=900&auto=format&fit=crop&q=60",
    cateogry: "Gaming",
    Icon: Gamepad2,
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=900&auto=format&fit=crop&q=60",
    cateogry: "Shopping",
    Icon: ShoppingCart,
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop&q=60",
    cateogry: "Health",
    Icon: HeartPulse,
  },
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=900&auto=format&fit=crop&q=60",
    cateogry: "Outdoor",
    Icon: Sun,
  },
  {
    img: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?w=900&auto=format&fit=crop&q=60",
    cateogry: "Nature",
    Icon: Leaf,
  },
  {
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a0b18?w=900&auto=format&fit=crop&q=60",
    cateogry: "Cycling",
    Icon: Bike,
  },
  {
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=900&auto=format&fit=crop&q=60",
    cateogry: "Sports",
    Icon: LucideBike,
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=900&auto=format&fit=crop&q=60",
    cateogry: "Local",
    Icon: MapPin,
  },
];

const Section3 = () => {
  const [index, setIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    setMaxWidth(carousel.current!.scrollWidth - container.current!.clientWidth);
  }, []);

  useNoiseConfig(
    {
      color: "150 150 150",
      opacity: 0.2,
      key: "white-noise",
    },
    [],
  );

  return (
    <div className="w-full pt-5 md:pt-20 lg:pt-30">
      <div className="w-full flex max-md:flex-col md:items-end justify-between">
        <div>
          <h2 className="text-lg md:text-2xl font-medium">
            What’s on{" "}
            <span className="inline-block w-10 md:w-14 align-middle">
              <Logo />
            </span>{" "}
            : All the plans worth
            <br className="max-sm:hidden" /> leaving the house for — in one
            place.
          </h2>
          <p className="max-w-[500px] text-pretty text-zinc-500 text-xs max-md:leading-5 md:text-sm mt-3">
            Curated experiences where you can try something new, meet your kind
            of people, and make every experience feel like it matters.
          </p>
        </div>
        <div className="flex gap-5 max-md:mt-12">
          <button
            aria-hidden="true"
            onClick={() => setIndex(index - 1)}
            className="size-[40px] rounded-full text-white bg-zinc-800 flex items-center justify-center"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            aria-hidden="true"
            onClick={() => setIndex(index + 1)}
            className="size-[40px] rounded-full text-white bg-zinc-800 flex items-center justify-center"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
      <div
        className="w-full max-w-full overflow-hidden max-md:mt-10 mt-20"
        ref={container}
      >
        <motion.div
          ref={carousel}
          animate={{
            x: -Math.max(0, Math.min(index * (300 + 12), maxWidth)),
          }}
          transition={{
            damping: 12,
            duration: 0.5,
            type: "spring",
          }}
          className="flex gap-[12px] w-full min-w-fit"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((cat, i) => (
            <div key={i} className="w-[300px] flex-shrink-0 h-[425px] relative">
              <img
                src={cat.img}
                className="size-full rounded-xl object-cover select-none pointer-events-none"
                alt=""
              />
              <div className="absolute top-0 left-0 bg-black/5 size-full rounded-xl" />
              <Noise
                className="w-full h-full absolute top-0 left-0"
                isAnimated
                noiseKey="white-noise"
              />
              <div className="absolute top-4 left-4 text-white  flex flex-col gap-2 font-medium drop-shadow-sm">
                <cat.Icon className="size-5" strokeWidth={1.8} /> {cat.cateogry}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Section4 = () => {
  return (
    <div className="flex flex-col pt-30">
      <div className="text-center font-medium max-md:text-xl text-2xl max-w-[600px] text-pretty mx-auto">
        Don’t scroll through life. Live it. tyes helps you find experiences
        worth talking about — new places, new faces, and real connections.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 items-start rounded-2xl overflow-hidden w-fit">
        <article className="bg-[#F8F5EE] h-full p-7 md:px-8 lg:px-10 xl:p-24 flex flex-col justify-center text-[#2A4747] flex-1">
          <header>
            <h1 className="text-xl lg:text-2xl font-medium max-lg:text-pretty ">
              Book curated local experiences. <br className="max-sm:hidden" />
              Connect with people.
            </h1>
          </header>
          <p className="text-xs leading-5 sm:text-sm lg:text-base mt-4 text-[#656565]">
            From rooftop dinners to cooking classes and desert adventures — Tyes
            helps you turn free time into memories. These aren’t just events.
            They’re stories you’ll still be telling next year.
          </p>
          <footer>
            <button className="py-3 px-4 lg:text-base text-xs md:text-sm rounded-full hover:shadow-lg hover:scale-[1.05] transition-all duration-300 cursor-pointer tracking-wide text-white mt-7 bg-[#2A4747]">
              Join Waitlist
            </button>
          </footer>
        </article>
        <div className="flex-1 h-full max-md:row-start-1">
          <Image
            width={500}
            height={500}
            alt=""
            src="/image-grid-1.png"
            className="size-full object-cover max-md:max-h-[280px]  "
            objectFit="cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 items-start rounded-2xl overflow-hidden w-fit">
        <div className="flex-1 h-full">
          <Image
            width={500}
            height={500}
            alt=""
            src="/image-grid-2.png"
            className="size-full object-cover max-md:max-h-[280px]"
            objectFit="cover"
          />
        </div>
        <article className="bg-[#F8F5EE] h-full p-7 md:px-8 lg:px-10 xl:p-24 flex flex-col justify-center text-[#2A4747] flex-1">
          <header>
            <h1 className="text-xl lg:text-2xl font-medium max-sm:text-pretty">
              Got an experience worth sharing?
              <br className="max-sm:hidden" /> For vendors & hosts.
            </h1>
          </header>
          <p className="text-xs leading-5 sm:text-sm lg:text-base mt-4 text-[#656565]">
            From rooftop dinners to cooking classes and desert adventures — Tyes
            helps you turn free time into memories. These aren’t just events.
            They’re stories you’ll still be telling next year.
          </p>
          <footer>
            <button className="py-3 px-4 lg:text-base text-xs md:text-sm rounded-full hover:shadow-lg hover:scale-[1.05] transition-all duration-300 cursor-pointer tracking-wide text-white mt-7 bg-[#2A4747]">
              Join Waitlist
            </button>
          </footer>
        </article>
      </div>
    </div>
  );
};

const LaunchingSoon = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl md:text-2xl font-medium md:leading-8">
        Launching Soon on App Store
        <br />
        and Google Playstore
      </h2>
      <p className="text-sm text-zinc-500 mt-3 max-w-[450px] leading-6">
        We’re starting in the UAE — and we’d love to have you in early.
        <br className="max-sm:hidden" /> Join our waitlist for first dibs on
        experiences and launch updates.
      </p>
      <div className="mt-10 grid gap-5 max-[480px]:grid-cols-1 grid-cols-2 lg:grid-cols-4">
        <div className="flex-1 rounded-2xl  pl-3 pt-3  md:pl-8 md:pt-8 bg-[#f4f4f4] overflow-hidden max-sm:w-full relative aspect-[0.7] lg:aspect-[0.6] max-h-[500px]">
          <div className="px-3 py-1 text-sm  w-fit rounded-full bg-brand text-white">
            Discover
          </div>
          <div className="font-medium mt-2 text-xl">Discover Experience</div>
          <svg
            className="w-full absolute bottom-0 left-0"
            viewBox="0 0 308 251"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.32031 31.1094C33.5665 31.1094 127.795 163.503 180.188 199.027C257.423 251.397 298.487 188.077 307.956 188.077"
              stroke="#E4EDEC"
              strokeWidth="61"
            />
          </svg>

          <motion.div
            className="absolute bottom-0 right-0 size-full"
            whileInView={{
              rotate: 0,
              x: 0,
              y: 0,
              opacity: 1,
            }}
            initial={{ rotate: 20, x: 60, y: 30, opacity: 0 }}
            // viewport={{ amount: 0. }}
            transition={{ duration: 0.5, type: "spring" }}
            style={{
              transformOrigin: "center right",
            }}
          >
            <Image
              width={300}
              height={533}
              src="/tyes-event-feed.png"
              className="size-full object-cover"
              alt=""
            />
          </motion.div>
        </div>
        <div className="flex-1 rounded-2xl  pl-3 pt-3  md:pl-8 md:pt-8 bg-[#f4f4f4] overflow-hidden max-sm:w-full relative aspect-[0.7] lg:aspect-[0.6] max-h-[500px]">
          <div className="px-3 py-1 text-sm  w-fit rounded-full bg-brand text-white">
            Connect
          </div>
          <div className="font-medium mt-2 text-xl">Real connections</div>
          <svg
            className="absolute size-full top-0 left-0"
            viewBox="0 0 308 354"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M309.68 31.3008C277.434 31.3008 239.342 178.884 166.425 245.433C97.4996 308.34 10.4661 323.075 0.996979 323.075"
              stroke="#E4EDEC"
              strokeWidth="61"
            />
          </svg>

          <motion.div
            className="absolute bottom-0 left-0 size-full"
            whileInView={{ rotate: 0, opacity: 1, transition: { delay: 0.4 } }}
            initial={{ rotate: -10, opacity: 0 }}
            // viewport={{ amount: 0. }}
            transition={{
              duration: 0.5,
              // delay: 0.4,
              type: "spring",
            }}
          >
            <Image
              alt=""
              src="/tyes-event-screenshot.png"
              width={300}
              height={533}
              className="size-full object-cover"
            />
          </motion.div>
        </div>
        <div className="flex-1 rounded-2xl  pl-3 pt-3  md:pl-8 md:pt-8 bg-[#f4f4f4] overflow-hidden max-sm:w-full relative aspect-[0.7] lg:aspect-[0.6] max-h-[500px]">
          <svg
            className="w-full size-full absolute top-[6%] left-0"
            viewBox="0 0 309 409"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-1.32031 30.7578C25.5286 30.7578 131.703 238.534 198.456 319.721C257.722 391.802 299.076 377.214 308.545 377.214"
              stroke="#E4EDEC"
              strokeWidth="61"
            />
          </svg>

          <motion.div
            className="absolute bottom-0 left-0 size-full p-8"
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
            initial={{ opacity: 0, y: 20 }}
            // viewport={{ amount: 0. }}
            transition={{
              duration: 0.5,
              type: "spring",
            }}
          >
            <Image
              alt=""
              src="/tyes-logo-with-bg.png"
              width={300}
              height={533}
              className="size-full object-cover max-sm:rounded-2xl"
            />
          </motion.div>
        </div>
        <div className="flex-1 rounded-2xl  pl-3 pt-3  md:pl-8 md:pt-8 bg-[#f4f4f4] overflow-hidden max-sm:w-full relative aspect-[0.7] lg:aspect-[0.6] max-h-[500px]">
          <div className="px-3 py-1 text-sm  w-fit rounded-full bg-brand text-white">
            Hosting
          </div>
          <div className="font-medium mt-2 text-xl">Host an event</div>
          <motion.div
            className="absolute bottom-0 left-0 size-full pt-20 px-8 "
            whileInView={{ opacity: 1, x: 0, transition: { delay: 1.2 } }}
            initial={{ opacity: 0, x: 20 }}
            // viewport={{ amount: 0. }}
            transition={{
              duration: 0.5,

              type: "spring",
            }}
          >
            <Image
              alt=""
              src="/tyes-event-creation-screenshot.png"
              width={300}
              height={533}
              className="size-full object-cover"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const handleSubmit = () => {};

  return (
    <footer className="bg-zinc-800 py-20">
      <Gutter>
        <div className="flex max-lg:flex-wrap justify-between w-full gap-32">
          <div className="rounded-xl bg-zinc-900/40 p-8 min-w-[350px]">
            <div className="mb-1 tracking-wide text-brand text-sm uppercase">
              Get Early Access
            </div>
            <div className="text-white text-2xl tracking-wide text-balance mb-6">
              Get notified when we launch!
            </div>
            <form>
              <div className="rounded-xl flex gap-2 items-start flex-col">
                <label
                  htmlFor="fullName"
                  className="text-white/50 text-xs font-medium whitespace-nowrap"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full h-9  px-3 placeholder:text-white/50 text-sm text-white border border-zinc-700 rounded-lg focus:border-zinc-300 bg-zinc-800/30 transition-all ring-offset-1 outline-none focus:outline-none"
                />
              </div>
              <div className="rounded-xl flex gap-2 items-start flex-col mt-4">
                <label
                  htmlFor="email"
                  className="text-white/50 text-xs font-medium whitespace-nowrap"
                >
                  Email
                </label>
                <input
                  placeholder="john@example.com"
                  id="email"
                  type="email"
                  required
                  className="w-full h-9 px-3 placeholder:text-white/50 text-sm text-white border border-zinc-700 rounded-lg focus:border-zinc-300 bg-zinc-800/30 transition-all ring-offset-1 outline-none focus:outline-none"
                />
                <button
                  type="submit"
                  className="py-2 px-6 mt-7 rounded-full bg-brand text-white font-medium text-sm"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col max-lg:gap-16">
            <div className="flex w-full flex-1 justify-between gap-10 flex-wrap">
              <div className="flex flex-col">
                <div className="text-sm text-brand text-medium tracking-wide mb-5">
                  INFO
                </div>
                <a
                  href=""
                  className="text-white/80 hover:text-white transition-colors duration-300 font-sm mb-2"
                >
                  App Demo
                </a>
                <a
                  href=""
                  className="text-white/80 hover:text-white transition-colors duration-300 font-sm mb-2"
                >
                  Privacy Policy
                </a>
                <a
                  href=""
                  className="text-white/80 hover:text-white transition-colors duration-300 font-sm "
                >
                  Terms {"&"} Conditions
                </a>
              </div>
              <div className="flex flex-col">
                <div className="text-sm text-brand text-medium tracking-wide mb-5">
                  CONTACT US
                </div>
                <p className="text-white/80 hover:text-white transition-colors duration-300 font-sm mb-2">
                  +1 (999) 999-99-99
                  <br />
                  hello@logoipsum.com, London
                </p>
              </div>
              <div className="max-sm:hidden">
                <svg
                  width="69"
                  height="22"
                  viewBox="0 0 69 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.51855 17.2158C6.6735 17.2158 5.3151 16.8561 4.44336 16.1367C3.57161 15.4173 3.13574 14.2747 3.13574 12.709V6.01855H0.279297V3.55566H3.13574V0.102539H6.53809V3.55566H10.8799V6.01855H6.53809V12.3281C6.53809 13.2168 6.75391 13.8431 7.18555 14.207C7.62565 14.571 8.34505 14.7529 9.34375 14.7529C9.61458 14.7529 9.88542 14.7402 10.1562 14.7148C10.4355 14.681 10.6768 14.6471 10.8799 14.6133V17.0254C10.5583 17.0846 10.1943 17.1312 9.78809 17.165C9.38184 17.1989 8.95866 17.2158 8.51855 17.2158ZM15.8184 21.5195C15.429 21.5195 15.0609 21.4984 14.7139 21.4561C14.3669 21.4222 14.0579 21.3757 13.7871 21.3164V18.8154C14.0072 18.8662 14.2526 18.9085 14.5234 18.9424C14.7943 18.9762 15.0736 18.9932 15.3613 18.9932C16.0638 18.9932 16.6605 18.8831 17.1514 18.6631C17.6507 18.443 18.0697 18.0537 18.4082 17.4951L18.7383 16.9111L12.0732 3.55566H15.6787L20.8965 14.6514L20.2363 14.0674H21.1377L20.4775 14.6514L25.4541 3.55566H29.0088L22.6104 16.835C22.0433 17.986 21.4466 18.9043 20.8203 19.5898C20.2025 20.2754 19.4915 20.7663 18.6875 21.0625C17.8835 21.3672 16.9271 21.5195 15.8184 21.5195ZM37.8193 17.3047C36.0843 17.3047 34.5947 17.0296 33.3506 16.4795C32.1064 15.9294 31.1501 15.1338 30.4814 14.0928C29.8128 13.0518 29.4785 11.7949 29.4785 10.3223V10.3096C29.4785 8.87077 29.8171 7.6224 30.4941 6.56445C31.1797 5.50651 32.1318 4.68978 33.3506 4.11426C34.5693 3.53027 35.9954 3.24251 37.6289 3.25098C39.2878 3.25944 40.7096 3.5599 41.8945 4.15234C43.0879 4.73633 44.002 5.56152 44.6367 6.62793C45.2799 7.68587 45.6016 8.93001 45.6016 10.3604V11.0713H31.1924V9.00195H43.4941L42.3643 10.6143V9.82715C42.3643 8.98079 42.1738 8.2487 41.793 7.63086C41.4206 7.01302 40.8831 6.53906 40.1807 6.20898C39.4782 5.87891 38.6403 5.71387 37.667 5.71387C36.6429 5.71387 35.7669 5.87891 35.0391 6.20898C34.3112 6.5306 33.7526 7.01302 33.3633 7.65625C32.9824 8.29102 32.792 9.07812 32.792 10.0176V10.5508C32.792 11.5918 33.0205 12.4297 33.4775 13.0645C33.9346 13.6908 34.5482 14.1478 35.3184 14.4355C36.097 14.7148 36.9603 14.8545 37.9082 14.8545C38.5599 14.8545 39.165 14.7868 39.7236 14.6514C40.2907 14.5075 40.7816 14.3001 41.1963 14.0293C41.611 13.7585 41.9157 13.4368 42.1104 13.0645L42.1611 12.9756H45.3984L45.3604 13.1025C45.1488 13.7712 44.8145 14.3678 44.3574 14.8926C43.9089 15.4089 43.3503 15.849 42.6816 16.2129C42.0215 16.5684 41.2809 16.8392 40.46 17.0254C39.639 17.2116 38.7588 17.3047 37.8193 17.3047ZM54.9453 17.3047C53.3711 17.3047 52.0254 17.1396 50.9082 16.8096C49.7995 16.4795 48.9362 16.0055 48.3184 15.3877C47.7005 14.7614 47.3324 14.0124 47.2139 13.1406L47.2012 13.0391H50.54L50.5654 13.1279C50.7178 13.7542 51.1579 14.224 51.8857 14.5371C52.6221 14.8503 53.6546 15.0068 54.9834 15.0068C55.779 15.0068 56.4476 14.9391 56.9893 14.8037C57.5309 14.6598 57.9414 14.4567 58.2207 14.1943C58.5085 13.9235 58.6523 13.6019 58.6523 13.2295V13.2168C58.6523 12.7598 58.4661 12.4128 58.0938 12.1758C57.7214 11.9388 57.0697 11.7695 56.1387 11.668L52.4189 11.2871C51.3525 11.1602 50.4639 10.9359 49.7529 10.6143C49.042 10.2842 48.5088 9.861 48.1533 9.34473C47.7979 8.81999 47.6201 8.20215 47.6201 7.49121V7.47852C47.6201 6.59831 47.891 5.84505 48.4326 5.21875C48.9827 4.58398 49.7656 4.09733 50.7812 3.75879C51.7969 3.42025 53.0114 3.25098 54.4248 3.25098C55.9144 3.25098 57.1839 3.42025 58.2334 3.75879C59.2829 4.08887 60.0954 4.56283 60.6709 5.18066C61.2464 5.7985 61.568 6.5306 61.6357 7.37695L61.6484 7.5166H58.5L58.4873 7.44043C58.3942 6.85645 57.9964 6.39518 57.2939 6.05664C56.5915 5.7181 55.6436 5.54883 54.4502 5.54883C53.6969 5.54883 53.0622 5.62077 52.5459 5.76465C52.0296 5.90007 51.6361 6.09896 51.3652 6.36133C51.1029 6.6237 50.9717 6.94108 50.9717 7.31348V7.32617C50.9717 7.61393 51.0563 7.85938 51.2256 8.0625C51.3949 8.26562 51.6615 8.4349 52.0254 8.57031C52.3978 8.69727 52.8844 8.79883 53.4854 8.875L57.2432 9.25586C58.9528 9.44206 60.18 9.83561 60.9248 10.4365C61.6781 11.0374 62.0547 11.8796 62.0547 12.9629V12.9756C62.0547 13.8643 61.7712 14.6344 61.2041 15.2861C60.637 15.9378 59.8203 16.4372 58.7539 16.7842C57.696 17.1312 56.4264 17.3047 54.9453 17.3047ZM66.1299 17.1904C65.5798 17.1904 65.1185 17.0127 64.7461 16.6572C64.3822 16.2933 64.2002 15.849 64.2002 15.3242C64.2002 14.7995 64.3822 14.3594 64.7461 14.0039C65.1185 13.64 65.5798 13.458 66.1299 13.458C66.68 13.458 67.137 13.64 67.501 14.0039C67.8734 14.3594 68.0596 14.7995 68.0596 15.3242C68.0596 15.849 67.8734 16.2933 67.501 16.6572C67.137 17.0127 66.68 17.1904 66.1299 17.1904Z"
                    fill="#58B2AD"
                  />
                </svg>
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <div className="text-sm text-brand text-medium tracking-wide mb-5">
                FOR VENDORS {"&"} VENUES
              </div>
              <form>
                <div className="rounded-xl flex gap-2 items-start flex-col">
                  <div className="flex w-full">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      className=" h-9 px-3 placeholder:text-white/50 text-sm text-white border border-zinc-700 rounded-lg focus:border-zinc-300 bg-zinc-800/30 transition-all ring-offset-1 outline-none focus:outline-none w-full md:w-1/2"
                    />
                    <button className="h-9 font-medium text-white flex text-sm px-5 py-1 items-center bg-brand rounded-lg ml-2">
                      Submit
                      <ChevronRight className="size-5 ml-1" />
                    </button>
                  </div>
                  <p className="text-xs mt-2 text-white/70 tracking-wide">
                    We&#39;ll contact you within 24 hours to start setting up
                    your venue on{" "}
                    <span className="w-7 inline-block align-bottom leading-0 mb-[2px]">
                      <Logo />
                    </span>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="ml-auto text-white/50 mt-10 text-sm flex items-center whitespace-nowrap">
          © {new Date().getFullYear()} — Copyright
        </div>
      </Gutter>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="font-sans max-w-[1440px] overflow-x-hidden mx-auto w-full h-full min-h-screen">
      <main>
        <Hero />
        <Gutter>
          <div className="pb-20">
            <Section2 />
            <Section3 />
            <Section4 />
          </div>
        </Gutter>
        <AvatarsSection />
        <div className="h-[250px]" />
        <Gutter>
          <LaunchingSoon />
        </Gutter>
        <div className="mt-40" />
      </main>
      <Footer />
    </div>
  );
}
