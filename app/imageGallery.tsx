"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const imageFilenames = [
  "ACE03719.jpg",
  "ACE03750.jpg",
  "ACE03760.jpg",
  "ACE03768.jpg",
  "ACE03773.jpg",
  "ACE03777.jpg",
  "ACE03785.jpg",
  "ACE03793.jpg",
  "ACE03802.jpg",
  "ACE03813.jpg",
  "ACE03821.jpg",
  "ACE03825.jpg",
  "ACE03833.jpg",
  "ACE03840.jpg",
  "DSC00001.jpg",
  "DSC00975.jpg",
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images: { src: string; alt: string }[] = [];
  for (const filename of imageFilenames) {
    if (filename.startsWith("ACE") || filename.startsWith("DSC")) {
      images.push({
        src: `/images/${filename}`,
        alt: `Image of Saavya's Rice Feeding Ceremony`,
      });
    }
  }

  return (
    <div className="grid grid-cols-3 gap-4p">
      {images?.map((image, index) => (
        <div key={index} className="border border-gray-200 m-2">
          <Image
            key={index}
            src={image?.src}
            alt={image.alt}
            className="w-full h-full object-cover cursor-pointer"
            width={400}
            height={400}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
