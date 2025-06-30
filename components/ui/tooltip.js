import { cn } from "@/lib/utils"

export function Tooltip({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function TooltipTrigger({ className, ...props }) {
  return <div className={className} {...props} />
}

export function TooltipContent({ className, ...props }) {
  return (
    <div
      className={cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
        className,
      )}
      {...props}
    />
  )
}

export function TooltipProvider({ children, ...props }) {
  return <div {...props}>{children}</div>
}
