import { Fragment } from "react";
import { ArrowLeftIcon, XIcon } from "lucide-react";
import { ItemChat } from "@/components";

const DetailChat = () => {
  return (
    <Fragment>
      <div className="flex w-full py-3 px-5 justify-between items-center">
        <div className="flex w-full space-x-5 items-center">
          <ArrowLeftIcon size={24} />
          <section className="w-full">
            <p className="text-blue-primary font-semibold">
              1-589-AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
            </p>
            <p className="text-sm mt-1">3 Partciant</p>
          </section>
        </div>
        <XIcon />
      </div>
      <div className="h-[1px] bg-gray-500" />

      {/*  */}
      <section className="mt-3 overflow-auto px-5">
        <ItemChat message="lorem lorem lorem lorem" time="19:22" />
        <ItemChat message="lorem lorem lorem lorem" time="19:22" name="Maya" />
      </section>
    </Fragment>
  );
};

export default DetailChat;
