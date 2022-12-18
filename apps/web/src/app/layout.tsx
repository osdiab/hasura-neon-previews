"use client";

import * as React from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryClientProvider client={queryClient}>
    <html>
      <head />
      <body>{children}</body>
    </html>
    </QueryClientProvider>
  )
}
