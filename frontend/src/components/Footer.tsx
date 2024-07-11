export const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-[#333]">
      <p className="text-xs text-muted-foreground">
        &copy; 2024 Chess Website. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <div className="text-xs hover:underline underline-offset-4 cursor-pointer">
          Terms of Service
        </div>
        <div className="text-xs hover:underline underline-offset-4 cursor-pointer">
          Privacy
        </div>
      </nav>
    </footer>
  );
};
