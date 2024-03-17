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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleImageClick = (index: number) => {
    setSelectedImage(images[index]);
    setShowModal(true);
    setIsLoading(true);
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

  return (
    <div className="grid  md:grid-cols-4 gap-4">
      {images?.map((image, index) => (
        <div key={index} className="border border-gray-200 m-2 grid gap-4">
          <Image
            key={index}
            src={image?.src}
            className={`w-full h-full object-cover cursor-pointer`}
            alt={image.alt}
            width={400}
            height={400}
            onClick={() => handleImageClick(index)}
          />
        </div>
      ))}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-4 max-w-screen-md">
            {isLoading && <p>Loading...</p>}
            <div className="relative w-[40rem] h-[60rem]">
              <Image
                src={selectedImage!.src}
                alt={selectedImage!.alt}
                className="absolute inset-0 w-full h-full object-contain"
                width={1200}
                height={1200}
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
