import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import { getURL } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

const InterFont = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: {
	default: "Techfish",
    template: "%s | Techfish",
  },
  description: "Techfish Portfolio"
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={cn(
			  "min-h-dvh bg-background font-sans antialiased",
			  InterFont.variable
			)}>
				<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
