import clsx from "clsx";

export default function RightSectionCard() {
  return (
    <>
      <div
        className={clsx(
          "bg-white",
          "border border-black/20",
          "rounded-md",
          "m-1",
          "p-1",
          "divide-y",
          "gap-5",
          "mt-5"
        )}
      >
        <h1 className={clsx("text-lg", "font-bold", "p-2")}>
          Active discussions
        </h1>
        <div className={clsx("flex", "flex-col")}>
          <p
            className={clsx(
              "text-[#404040]",
              "p-2",
              "hover:text-[#391fb9]",
              "hover:cursor-pointer"
            )}
          >
            How I write Commits like a pro
          </p>
          <p className={clsx("text-[#404040]", "text-sm", "p-2")}>
            13 comments
          </p>
        </div>
        <div className={clsx("flex", "flex-col")}>
          <p
            className={clsx(
              "text-[#404040]",
              "p-2",
              "hover:text-[#391fb9]",
              "hover:cursor-pointer"
            )}
          >
            Top VS Code Shortcuts
          </p>
          <p className={clsx("text-[#404040]", "text-sm", "p-2")}>
            12 comments
          </p>
        </div>
        <div className={clsx("flex", "flex-col")}>
          <p
            className={clsx(
              "text-[#404040]",
              "p-2",
              "hover:text-[#391fb9]",
              "hover:cursor-pointer"
            )}
          >
            Why Isn't AI as Smart As We Always Expect?
          </p>
          <p className={clsx("text-[#404040]", "text-sm", "p-2")}>6 comments</p>
        </div>
        <div className={clsx("flex", "flex-col")}>
          <p
            className={clsx(
              "text-[#404040]",
              "p-2",
              "hover:text-[#391fb9]",
              "hover:cursor-pointer"
            )}
          >
            How JavaScript helped me buy my dream boat
          </p>
          <p className={clsx("text-[#404040]", "text-sm", "p-2")}>5 comments</p>
        </div>
      </div>
    </>
  );
}
