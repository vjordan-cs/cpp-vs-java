import { CopyBlock, dracula } from "react-code-blocks";

export default function MyCodeBlock({
  code,
  language,
  showLineNumbers,
  startingLineNumber,
}) {
  <CopyBlock
    text={code}
    language={language}
    showLineNumbers={showLineNumbers}
    startingLineNumber={startingLineNumber}
    theme={dracula}
    codeBlock
  />;
}
