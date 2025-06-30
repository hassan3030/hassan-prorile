import { cn } from "@/lib/utils"

export function RadioGroup({ className, ...props }) {
  return <div className={cn("grid gap-2", className)} {...props} />
}

export function RadioGroupItem({ className, ...props }) {
  return (
    <button
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  )
}
