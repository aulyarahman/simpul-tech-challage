"use client";
import { createContext, FC, ReactNode, useState } from "react";

type TypeShow = "Task" | "Inbox";

type Ctx = {
  typeShow?: TypeShow;
  setTypeShow: (type?: TypeShow) => void;
};

export const RootCtx = createContext<Ctx>({
  typeShow: undefined,
  setTypeShow: () => undefined,
});

export const RootProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [typeShow, setTypeShow] = useState<TypeShow>();

  return (
    <RootCtx.Provider value={{ typeShow, setTypeShow }}>
      {children}
    </RootCtx.Provider>
  );
};
