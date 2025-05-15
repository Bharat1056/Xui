"use client"

import { useState } from "react"
import { Check, Copy, Terminal, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CommandClipboard() {
  const [copied, setCopied] = useState(false)
  const [npmCopied, setNpmCopied] = useState(false)

  const command = "npx shadcn@add-xui"

  const copyToClipboard = (text: string, type: "npm" | "npx") => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === "npx") {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } else {
        setNpmCopied(true)
        setTimeout(() => setNpmCopied(false), 2000)
      }
    })
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-gray-800 shadow-xl">
      <h3 className="text-xl font-bold text-white mb-2">Install XUI Components</h3>
      
      <div className="space-y-4">
        {/* NPX Command */}
        <div className="relative">
          <div className="flex items-center gap-2 mb-1">
            <Terminal className="h-4 w-4 text-blue-400" />
            <span className="text-xs font-medium text-gray-400">Install with npx</span>
          </div>
          <div className="relative flex items-center rounded-md bg-black border border-gray-700 px-4 py-3 text-sm text-gray-100 overflow-hidden group">
            <span className="flex-1 font-mono tracking-tight">{command}</span>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 bg-gradient-to-l from-black via-black to-transparent pl-6">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full bg-gray-800/50 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 transition-colors duration-150"
                onClick={() => copyToClipboard(command, "npx")}
              >
                {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                <span className="sr-only">Copy command</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-xs text-gray-500 mt-2">
        Get started with XUI components for your next project
      </p>
    </div>
  )
}