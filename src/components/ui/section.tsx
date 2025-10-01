// src/components/ui/section.tsx

import React from "react";
import { Container } from "./container";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl";
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = "",
  containerSize = "lg",
}) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
};
