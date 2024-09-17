import { twMerge } from "tailwind-merge";

type ContentWrapProps = {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
};

const ContentWrap = ({
  children,
  className = "",
  noPadding = false,
}: ContentWrapProps) => {
  if (noPadding) {
    return <>{children}</>;
  }
  return (
    <section
      className={twMerge("container mx-auto px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </section>
  );
};

export default ContentWrap;
