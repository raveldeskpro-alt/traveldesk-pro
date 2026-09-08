import React from "react";
import { AlertCircle, CheckCircle2, Inbox, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function LoadingState({ label = "Loading", className }: { label?: string; className?: string }) {
  return (
    <div className={cn("flex min-h-40 flex-col items-center justify-center gap-3 text-sm text-slate-500 dark:text-slate-400", className)} role="status" aria-live="polite">
      <Loader2 className="h-5 w-5 animate-spin text-brand" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-md bg-slate-200 dark:bg-slate-700", className)} aria-hidden="true" />;
}

export function EmptyState({ title, description, action, className }: { title: string; description?: string; action?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex min-h-40 flex-col items-center justify-center px-6 py-10 text-center", className)}>
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
        <Inbox className="h-5 w-5" aria-hidden="true" />
      </div>
      <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{title}</h2>
      {description && <p className="mt-1 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function ErrorState({ title = "Something went wrong", description, action, className }: { title?: string; description?: string; action?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex min-h-40 flex-col items-center justify-center px-6 py-10 text-center", className)} role="alert">
      <AlertCircle className="mb-3 h-5 w-5 text-red-600" aria-hidden="true" />
      <h2 className="text-sm font-semibold text-slate-900 dark:text-white">{title}</h2>
      {description && <p className="mt-1 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function SuccessState({ message, className }: { message: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-400", className)} role="status" aria-live="polite">
      <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{message}</span>
    </div>
  );
}
