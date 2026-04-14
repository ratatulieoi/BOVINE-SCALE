function Footer() {
  return (
    <footer id="footer" className="mt-20 w-full bg-surface-container-low py-12">
      <div className="content-shell flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <span className="font-body text-sm font-bold text-on-surface md:text-base">Bovine<span className="text-primary-fixed">Scale</span></span>

          <div className="flex flex-wrap justify-center gap-6 md:justify-start">
            <a className="text-sm text-on-surface-variant transition-colors hover:text-primary" href="#footer">
              Privacy Policy
            </a>
            <a className="text-sm text-on-surface-variant transition-colors hover:text-primary" href="#footer">
              Terms of Service
            </a>
            <a className="text-sm text-on-surface-variant transition-colors hover:text-primary" href="#footer">
              Support
            </a>
          </div>
        </div>

        <div className="text-sm text-on-surface-variant">© 2026 Bovine<span className="text-primary-fixed">Scale</span>.</div>
      </div>
    </footer>
  )
}

export default Footer
