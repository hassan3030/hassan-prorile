import { cn } from "@/lib/utils"

export function Toast({ className, variant = "default", ...props }) {
  return (
    <div
      className={cn(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all",
        {
          "border bg-background text-foreground": variant === "default",
          "destructive group border-destructive bg-destructive text-destructive-foreground": variant === "destructive",
        },
        className,
      )}
      {...props}
    />
  )
}

export function ToastTitle({ className, ...props }) {
  return <div className={cn("text-sm font-semibold", className)} {...props} />
}

export function ToastDescription({ className, ...props }) {
  return <div className={cn("text-sm opacity-90", className)} {...props} />
}
