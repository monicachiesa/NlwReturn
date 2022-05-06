import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../assets/bug.png'
import ideaImageUrl from '../../assets/idea.png'
import otherImageUrl from '../../assets/other.png'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        },
        title: 'Ideia'
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: otherImageUrl,
            alt: 'Imagem de um balão de pensamentos.'
        },
    }
}
export type FeedbackType = keyof typeof feedbackTypes;  //retorna as chaves da tipagem

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            {!feedbackType ? (
               <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
              <FeedbackContentStep feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              />
            )}
            <footer className="text-xs text-neutral 400">
                Feito com ♥ pela <a href="https://rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a>
            </footer>
        </div>
    )
}