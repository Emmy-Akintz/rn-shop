import { ReactNode } from "react";

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    //* TODO: Check if user is authenticated and if user is an admin before rendering the page
    
    return <>{children}</>;
}