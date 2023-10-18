import Nav from "./nav";
interface lay {
  children: React.ReactNode;
}
export default function dashboardLayout({ children }: lay) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
