import { cn } from "@/lib/utils";
import { dmSans } from "./sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, ReactNode, FC } from "react";
import { CodeBlock } from "@/components/ui/code-block";

interface VariantData {
  title: string;
  variant?: string;
  code: string;
  element: () => ReactNode;
  description: string;
}

interface SizeData {
  title: string;
  size: "default" | "sm" | "lg" | "icon";
  code: string;
  element: () => ReactNode;
  description: string;
}

interface DocsProps {
  buttonVariantsData: VariantData[];
  buttonSizesData: SizeData[];
  buttonCode: string;
  title: string;
  description?: string;
  defaultComponent: ReactNode;
}

const ComponentDocs: FC<DocsProps> = ({
  buttonVariantsData,
  buttonSizesData,
  buttonCode,
  title,
  description,
  defaultComponent,
}) => {
  const [copied, setCopied] = useState(false);
  const codeExample = buttonCode;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full gap-8 max-w-3xl mx-auto py-10 px-4">
      <div className="flex flex-col space-y-2">
        <h1 className={cn("text-4xl font-bold tracking-tight", dmSans.className)}>
          Button
        </h1>
        <p className="text-muted-foreground text-lg">
          {description ?? "Displays a button or a component that looks like a button."}
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="text-sm font-medium text-muted-foreground">Installation</div>
        <CodeBlock language="bash" filename="Terminal" code="npx shadcn-ui@latest add button" />
      </div>

      <div className="flex flex-col space-y-4">
        <div className="text-sm font-medium text-muted-foreground">Usage</div>
        <div className="border border-border rounded-lg overflow-hidden">
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="bg-secondary/50 border-b border-border rounded-none p-0">
              <TabsTrigger value="preview" className="data-[state=active]:bg-background rounded-none py-2 px-3">
                Preview
              </TabsTrigger>
              <TabsTrigger value="code" className="data-[state=active]:bg-background rounded-none py-2 px-3">
                Code
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="preview"
              className="p-6 flex items-center justify-center bg-background/50 border-0"
            >
              {defaultComponent}
            </TabsContent>
            <TabsContent value="code" className="p-0 border-0">
              <CodeBlock language="tsx" filename="button-demo.tsx" code={codeExample} />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        <div className="text-lg font-medium text-muted-foreground">{title} Variants</div>
        <div className="space-y-6">
          {buttonVariantsData.map((item, index) => (
            <div key={`variant-${index}`} className="flex flex-col space-y-3">
              <h3 className="text-sm font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <div
                className="bg-secondary/50 p-4 rounded-md flex items-center justify-center w-full"
                style={{ height: 48 }}
              >
                <div className="w-full flex items-center justify-center">{item.element()}</div>
              </div>
              <CodeBlock language="tsx" filename="" code={item.code} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        <div className="text-lg font-medium text-muted-foreground">{title} Sizes</div>
        <div className="space-y-6">
          {buttonSizesData.map((item, index) => (
            <div key={`size-${index}`} className="flex flex-col space-y-3">
              <h3 className="text-sm font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <div
                className="bg-secondary/50 p-4 rounded-md flex items-center justify-center w-full"
                style={{ height: 48 }}
              >
                <div className="w-full flex items-center justify-center">{item.element()}</div>
              </div>
              <CodeBlock language="tsx" filename="" code={item.code} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentDocs