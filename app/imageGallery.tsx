"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type ImageData = {
  src: string;
  alt: string;
};

const imageFilenames = [
  "ACE03719.jpg",
  "ACE03750.jpg",
  "ACE03756.jpg",
  "ACE03760.jpg",
  "ACE03767.jpg",
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
  "ACE03845.jpg",
  "ACE03846.jpg",
  "ACE03850.jpg",
  "ACE03852.jpg",
  "ACE03855.jpg",
  "ACE03862.jpg",
  "ACE03864.jpg",
  "ACE03866.jpg",
  "ACE03867.jpg",
  "ACE03870.jpg",
  "ACE03873.jpg",
  "ACE03875.jpg",
  "ACE03977.jpg",
  "ACE03971.jpg",
  "ACE03970.jpg",
  "close_icon.svg",
  "DSC00001.jpg",
  "DSC00869.jpg",
  "DSC00875.jpg",
  "DSC00876.jpg",
  "DSC00879.jpg",
  "DSC00880.jpg",
  "DSC00883.jpg",
  "DSC00884.jpg",
  "DSC00885.jpg",
  "DSC00886.jpg",
  "DSC00887.jpg",
  "DSC00893.jpg",
  "DSC00895.jpg",
  "DSC00897.jpg",
  "DSC00900.jpg",
  "DSC00904.jpg",
  "DSC00910.jpg",
  "DSC00962.jpg",
  "DSC00975.jpg",
  "DSC01018.jpg",
  "DSC01024.jpg",
  "DSC01025.jpg",
  "DSC01030.jpg",
  "DSC01040.jpg",
  "DSC01051.jpg",
  "DSC01056.jpg",
  "DSC01062.jpg",
  "DSC01068.jpg",
  "DSC01078.jpg",
  "DSC01081.jpg",
  "DSC01082.jpg",
  "DSC01084.jpg",
  "DSC01087.jpg",
  "DSC01089.jpg",
  "DSC01099.jpg",
  "ACE03737.jpg",
  "ACE03744.jpg",
  "ACE03748.jpg",
  "ACE03772.jpg",
  "ACE03801.jpg",
  "ACE03819.jpg",
  "ACE03882.jpg",
  "ACE03885.jpg",
  "ACE03889.jpg",
  "ACE03890.jpg",
  "ACE03891.jpg",
  "ACE03899.jpg",
  "ACE03905.jpg",
  "ACE03909.jpg",
  "ACE03915.jpg",
  "ACE03917.jpg",
  "ACE03919.jpg",
  "ACE03921.jpg",
  "ACE03924.jpg",
  "ACE03938.jpg",
  "ACE03951.jpg",
  "ACE03984.jpg",
  "ACE03986.jpg",
  "ACE03988.jpg",
  "ACE03990.jpg",
  "ACE03993.jpg",
  "ACE03995.jpg",
  "ACE04002.jpg",
];

const ImageGallery = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageHeight, setImageHeight] = useState<number>(0);

  const handleImageClick = (index: number, event: React.MouseEvent) => {
    setSelectedImage(images[index]);
    setShowModal(true);
    setIsLoading(true);
    const image = event.target as HTMLImageElement;
    setImageHeight(image.height);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const images: { src: string; alt: string }[] = [];
  for (const filename of imageFilenames) {
    if (filename.startsWith("ACE") || filename.startsWith("DSC")) {
      images.push({
        src: `/images/${filename}`,
        alt: `Image of Saavya's Rice Feeding Ceremony`,
      });
    }
  }

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const modalHeight = `relative w-[40rem] h-[${imageHeight}px]`;

  return (
    <div className="grid  md:grid-cols-4 gap-4">
      {images?.map((image, index) => (
        <div key={index} className="border border-gray-200 m-2 grid gap-4">
          <Image
            key={index}
            src={image?.src}
            className="w-auto h-full object-cover cursor-pointer pointer-events-none md:pointer-events-auto"
            alt={image.alt}
            width={400}
            height={400}
            onClick={(e) => handleImageClick(index, e)}
          />
        </div>
      ))}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 max-w-screen-md">
            {isLoading && <p>Loading...</p>}
            <div className="relative w-[40rem] h-[40rem]">
              <Image
                src={selectedImage!.src}
                alt={selectedImage!.alt}
                className="absolute inset-0 w-full h-full object-contain"
                width={1200}
                height={imageHeight ?? 1200}
                onLoad={handleImageLoad}
              />
              <button
                className="absolute top-2 right-2 text-gray-800"
                onClick={closeModal}
              >
                <Image
                  src={"/images/close_icon.svg"}
                  width={20}
                  height={20}
                  alt="close"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
