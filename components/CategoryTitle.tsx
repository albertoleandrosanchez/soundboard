import React from "react";

type Props = {
  children: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

const CategoryTitle = (props: Props) => {
  const { children, ...rest } = props;
  return (
    <div className="h-fit flex flex-row ">
      <div className="h-auto w-[2px] bg-primary mr-2" />
      <h1 {...rest}>{children}</h1>
    </div>
  );
};

CategoryTitle.displayName = "CategoryTitle";

export default CategoryTitle;
