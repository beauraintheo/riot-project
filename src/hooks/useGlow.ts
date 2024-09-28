import { useEffect, useRef } from "react";

/**
 * Adds a glow effect to the cards when the mouse is over the container.
 * @returns A ref to the container element.
 */
export const useGlow = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardsContainer = containerRef.current;
    if (!cardsContainer)
      return;

    const handleMouseMove = (event: MouseEvent) => {
      const cards = cardsContainer.querySelectorAll<HTMLDivElement>(".game-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--xPos", `${x}px`);
        card.style.setProperty("--yPos", `${y}px`);
      });
    };

    cardsContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      cardsContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return containerRef;
};
