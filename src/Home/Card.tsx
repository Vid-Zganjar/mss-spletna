import React from 'react'

function Card (card: { Slika: any; Naslov: any; Text: any }) {
const Slika = card.Slika
const Naslov = card.Naslov
const Text = card.Text
  return (
    <div
  className=" border-2 border-slate-400 block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
  <div
    className="relative overflow-hidden bg-cover bg-no-repeat"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    <img
      className="object-cover h-96 w-96 rounded-t-md"
      src={Slika}
      alt="" />
    <a href="#!">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
    </a>
  </div>
  <div className="p-6 text-surface dark:text-white">
    <h5 className="mb-2 text-xl font-medium leading-tight">{Naslov}</h5>
    <p className="mb-4 text-base">
      {Text} Welcome to my page! My name is [Your Name] and I'm passionate about [Your Passion/Hobby/Interest]. 
        I love [Describe what you love doing or what defines you]. 
        I created this website to [Purpose of the website].
    </p>
    <button
      type="button"
      className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      data-twe-ripple-init
      data-twe-ripple-color="light">
      Button
    </button>
  </div>
</div>
  )
}

export default Card