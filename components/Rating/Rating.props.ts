import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface RatingProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isEditable?: boolean;
    rating: number;
    setRating?: (rating: number) => void;
}