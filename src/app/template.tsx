export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="page-transition-shell">
      <div className="page-transition-glow" aria-hidden="true" />
      <div className="page-transition-content">{children}</div>
    </div>
  );
}
