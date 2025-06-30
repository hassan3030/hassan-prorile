import { cn } from "@/lib/utils"

export function Alert({ className, variant = "default", ...props }) {
  return (
    <div
      className={cn(
        "relative w-full rounded-lg border p-4",
        {
          "bg-background text-foreground": variant === "default",
          "border-destructive/50 text-destructive dark:border-destructive": variant === "destructive",
        },
        className,
      )}
      {...props}
    />
  )
}

export function AlertTitle({ className, ...props }) {
  return <h5 className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
}

export function AlertDescription({ className, ...props }) {
  return <div className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
}
