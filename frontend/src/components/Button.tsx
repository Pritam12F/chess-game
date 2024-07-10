import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={
        className
          ? className
          : (className =
              "inline-flex h-10 items-center justify-center rounded-md bg-lime-600 px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer")
      }
    >
      {children}
    </button>
  );
};
