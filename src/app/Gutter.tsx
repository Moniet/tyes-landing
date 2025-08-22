import { PropsWithChildren } from "react";

const Gutter = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={`px-5 sm:px-10 lg:px-[8%] md:px-20 w-full ${className}`}>
      {children}
    </div>
  );
};

export default Gutter;
