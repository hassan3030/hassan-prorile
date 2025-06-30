import { cn } from "@/lib/utils"

export function Command({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        className,
      )}
      {...props}
    />
  )
}

export function CommandInput({ className, ...props }) {
  return (
    <div className="flex items-center border-b px-3">
      <input
        className={cn(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    </div>
  )
}

export function CommandList({ className, ...props }) {
  return <div className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)} {...props} />
}

export function CommandEmpty({ className, ...props }) {
  return <div className={cn("py-6 text-center text-sm", className)} {...props} />
}

export function CommandGroup({ className, ...props }) {
  return (
    <div
      className={cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className,
      )}
      {...props}
    />
  )
}

export function CommandItem({ className, ...props }) {
  return (
    <div
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    />
  )
}
