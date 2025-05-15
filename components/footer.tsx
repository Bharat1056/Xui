import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t pt-12 md:pt-16 md:pb-6 bg-slate-900/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-emerald-500">Xui</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A modern, elegant UI library for React that helps you build beautiful interfaces faster.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/xui/xui" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://twitter.com/xui" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com/company/xui" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/components" className="text-muted-foreground hover:text-foreground">
                  Components
                </Link>
              </li>
              <li>
                <Link href="/examples" className="text-muted-foreground hover:text-foreground">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/discord" className="text-muted-foreground hover:text-foreground">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/github" className="text-muted-foreground hover:text-foreground">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="/twitter" className="text-muted-foreground hover:text-foreground">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="/coffee" className="text-muted-foreground hover:text-foreground">
                  Buy me a coffee
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/license" className="text-muted-foreground hover:text-foreground">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Xui. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
