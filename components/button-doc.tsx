import { cn } from "@/lib/utils";
import { dmSans } from "./sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CopyIcon, CheckIcon } from "lucide-react";
import { useState } from "react";
import { CodeBlock } from "@/components/ui/code-block";
import ComponentDocs from "./component-details";

const buttonVariantsData = [
  {
    title: "Default",
    variant: undefined,
    code: `<Button>Default</Button>`,
    element: () => <Button>Default</Button>,
    description: "The default button style.",
  },
  {
    title: "Secondary",
    variant: "secondary",
    code: `<Button variant="secondary">Secondary</Button>`,
    element: () => <Button variant="secondary">Secondary</Button>,
    description: "A secondary button style, often used for less prominent actions.",
  },
  {
    title: "Destructive",
    variant: "destructive",
    code: `<Button variant="destructive">Destructive</Button>`,
    element: () => <Button variant="destructive">Destructive</Button>,
    description: "A button style that indicates a potentially destructive action.",
  },
  {
    title: "Outline",
    variant: "outline",
    code: `<Button variant="outline">Outline</Button>`,
    element: () => <Button variant="outline">Outline</Button>,
    description: "An outlined button style, providing a visual distinction.",
  },
];

const buttonSizesData = [
  {
    title: "Default",
    size: "default" as "default" | "sm" | "lg" | "icon",
    code: `<Button size="default">Default</Button>`,
    element: () => <Button size="default">Default</Button>,
    description: "The default button size.",
  },
  {
    title: "Small",
    size: "sm" as "default" | "sm" | "lg" | "icon",
    code: `<Button size="sm">Small</Button>`,
    element: () => <Button size="sm">Small</Button>,
    description: "A smaller button size, useful for compact layouts.",
  },
  {
    title: "Large",
    size: "lg" as "default" | "sm" | "lg" | "icon",
    code: `<Button size="lg">Large</Button>`,
    element: () => <Button size="lg">Large</Button>,
    description: "A larger button size, often used for primary actions.",
  },
  {
    title: "Icon",
    size: "icon" as "default" | "sm" | "lg" | "icon",
    code: `<Button size="icon">\n  <CopyIcon className="h-4 w-4" />\n</Button>`,
    element: () => (
      <Button size="icon">
        <CopyIcon className="h-4 w-4" />
      </Button>
    ),
    description: "An icon-only button, useful for toolbar actions.",
  },
];

const buttonCode = `import { Button } from "@/components/ui/button"
export default function ButtonDemo() {
  return <Button>Click me</Button>
}`;
  
const defaultComponent = () => {
  return <Button>Click me</Button>
}

const ButtonDocs = () => {
  return (
    <>
      <ComponentDocs 
        buttonCode={buttonCode}
        buttonSizesData={buttonSizesData}
        buttonVariantsData={buttonVariantsData}
        defaultComponent={defaultComponent()}
        title="Button"
        description="Displays a button or a component that looks like a button."
      />
    </>
  );
};

export default ButtonDocs;