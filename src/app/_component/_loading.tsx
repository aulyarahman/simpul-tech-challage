import { Spinner } from "@/components/icons";
import { FC } from "react";

const Loading: FC<{ type: string }> = ({ type }) => {
  return (
    <div className="justify-center items-center flex flex-col space-y-3">
      <Spinner />
      <p className="font-semibold text-gray-primary-300">Loading {type}</p>
    </div>
  );
};

export default Loading;
