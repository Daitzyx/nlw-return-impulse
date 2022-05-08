import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import bugImgUrl from "../../assets/bug.svg";
import ideaImgUrl from "../../assets/idea.svg";
import thoughtImgUrl from "../../assets/thought.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import FeedbackSuccessStep from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "problema",
    image: {
      source: bugImgUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "idea",
    image: {
      source: ideaImgUrl,
      alt: "image de uma lampada",
    },
  },
  OTHER: {
    title: "outro",
    image: {
      source: thoughtImgUrl,
      alt: "imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

//Object.entries(feedbackTypes) => {
// [
//   ["BUG", {...}],
//   ["IDEA", {...}],
//   ["OTHER", {...}],
// }
export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className='text-xs text-neutral-400'>
        <a>Rocketseat</a>
        Feito com ♥ pela{" "}
        <a
          className='underline underline-offset-2'
          href='https://rocketseat.com.br'
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
