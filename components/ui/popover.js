import { cn } from "@/lib/utils"

export function Popover({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function PopoverTrigger({ className, ...props }) {
  return <button className={className} {...props} />
}

export function PopoverContent({ className, ...props }) {
  return (
    <div
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
        className,
      )}
      {...props}
    />
  )
}
