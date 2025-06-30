import { cn } from "@/lib/utils"

export function DropdownMenu({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function DropdownMenuTrigger({ className, ...props }) {
  return <button className={className} {...props} />
}

export function DropdownMenuContent({ className, ...props }) {
  return (
    <div
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        className,
      )}
      {...props}
    />
  )
}

export function DropdownMenuItem({ className, ...props }) {
  return (
    <div
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    />
  )
}

export function DropdownMenuLabel({ className, ...props }) {
  return <div className={cn("px-2 py-1.5 text-sm font-semibold", className)} {...props} />
}

export function DropdownMenuSeparator({ className, ...props }) {
  return <div className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
}
