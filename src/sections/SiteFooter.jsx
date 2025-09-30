import React from 'react'

export default function SiteFooter() {
  return (
    <footer className="py-10 border-t bg-surface">
      <div className="mx-auto max-w-6xl px-4 grid sm:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-bold">Fahad Musleh Al Otaibi Est.</div>
          <p className="opacity-70">Refrigeration & Air Conditioning</p>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <p>Riyadh, Saudi Arabia</p>
          <a href="tel:+966503128467">+966 50 312 8467</a><br/>
          <a href="tel:+966598862137">+966 59 886 2137</a>
        </div>
        <div>
          <div className="font-semibold">Hours</div>
          <p>Sat–Thu 9:00–21:00</p>
        </div>
      </div>
      <div className="text-center text-xs opacity-60 mt-6 bg-surface">© {new Date().getFullYear()} All rights reserved.</div>
    </footer>
  )
}


