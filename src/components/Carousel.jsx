import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Button from "./Button";

export default function Carousel({ children }) {
  const autoPlayOptions = {
    delay: 3500,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoPlayOptions),
  ]);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden " ref={emblaRef}>
      <div className="flex">{children}</div>
      <div className="flex items-center justify-between max-w-xs my-8 mx-auto">
        <Button name="Previo" onclick={scrollPrev} />
        <Button name="Siguiente" onclick={scrollNext} />
      </div>
    </div>
  );
}
