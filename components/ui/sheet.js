import { cn } from "@/lib/utils"

export function Sheet({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function SheetTrigger({ className, ...props }) {
  return <button className={className} {...props} />
}

export function SheetContent({ className, side = "right", ...props }) {
  return (
    <div
      className={cn(
        "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out",
        {
          "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm": side === "right",
          "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm": side === "left",
          "inset-x-0 top-0 border-b": side === "top",
          "inset-x-0 bottom-0 border-t": side === "bottom",
        },
        className,
      )}
      {...props}
    />
  )
}

export function SheetHeader({ className, ...props }) {
  return <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
}

export function SheetTitle({ className, ...props }) {
  return <h2 className={cn("text-lg font-semibold text-foreground", className)} {...props} />
}

export function SheetDescription({ className, ...props }) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />
}
