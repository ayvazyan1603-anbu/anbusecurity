interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  warning?: string;
}

export const CodeBlock = ({ code, language = "python", showLineNumbers = true, warning }: CodeBlockProps) => {
  const lines = code.split("\n");

  const highlightSyntax = (line: string) => {
    // Simple syntax highlighting
    return line
      .replace(/(#.*)/g, '<span class="text-muted-foreground">$1</span>')
      .replace(/\b(def|class|import|from|return|if|else|elif|for|while|try|except|async|await|with)\b/g, '<span class="text-terminal-cyan">$1</span>')
      .replace(/\b(True|False|None)\b/g, '<span class="text-terminal-yellow">$1</span>')
      .replace(/("[^"]*"|'[^']*')/g, '<span class="text-terminal-green">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="text-terminal-yellow">$1</span>');
  };

  return (
    <div className="code-block">
      {warning && (
        <div className="text-primary text-xs mb-3 pb-3 border-b border-border">
          ⚠️ {warning}
        </div>
      )}
      <div className="flex">
        {showLineNumbers && (
          <div className="pr-4 text-muted-foreground select-none border-r border-border mr-4">
            {lines.map((_, i) => (
              <div key={i} className="text-xs leading-6">
                {i + 1}
              </div>
            ))}
          </div>
        )}
        <pre className="flex-1 overflow-x-auto">
          <code className="text-sm leading-6">
            {lines.map((line, i) => (
              <div
                key={i}
                dangerouslySetInnerHTML={{ __html: highlightSyntax(line) || "&nbsp;" }}
              />
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};
