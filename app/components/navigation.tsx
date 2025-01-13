import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ThemeToggle } from '@/components/theme-toggle'

export default function Navigation() {
  return (
    <nav className="border-b dotted-border p-4 flex justify-between items-center relative z-10">
      <Link href="/" className="text-xl font-bold">Gururaj</Link>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Button asChild variant="outline" className="border-border text-foreground button-hover transition-colors duration-300">
          <Link href="/contact">Contact →</Link>
        </Button>
      </div>
    </nav>
  )
}

