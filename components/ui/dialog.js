import { cn } from "@/lib/utils"

export function Dialog({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function DialogTrigger({ className, ...props }) {
  return <button className={className} {...props} />
}

export function DialogContent({ className, ...props }) {
  return (
    <div
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
        className,
      )}
      {...props}
    />
  )
}

export function DialogHeader({ className, ...props }) {
  return <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
}

export function DialogTitle({ className, ...props }) {
  return <h2 className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
}

export function DialogDescription({ className, ...props }) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />
}
