"use client";
import ImageGallery from "./imageGallery";

export default function Home() {
  return (
    <main>
      <header className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-wide text-center">
            Saavya`s Rice Feeding Ceremony
          </h1>
          <p className="text-xl font-semibold text-center mt-4">
            March 9th, 2024
          </p>
        </div>
      </header>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg leading-relaxed mb-6">
            Saavya`s Rice Feeding Ceremony, held on March 9th, 2024, was a
            joyous and memorable occasion filled with love, laughter, and
            blessings. Family and friends gathered to celebrate this significant
            milestone in Saavya`s life, marking her transition into solid food.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The ceremony, also known as Annaprashan in some cultures, is a
            traditional Hindu ritual where the baby is fed solid food for the
            first time. It symbolizes the introduction of new experiences and
            nourishment as the child grows.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The event was adorned with vibrant decorations, traditional attire,
            and delicious food. Saavya looked adorable in her ceremonial outfit,
            surrounded by loved ones showering her with blessings and well
            wishes for a healthy and prosperous future.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            It was a heartwarming and memorable day for everyone present,
            creating cherished memories that will be treasured for years to
            come.
          </p>
        </div>
      </section>
      {/* Image Gallery */}
      <ImageGallery />
    </main>
  );
}
