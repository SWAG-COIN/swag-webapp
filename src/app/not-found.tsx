import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='py-24 w-full'>
      <div className='text-center space-y-5 w-full'>
        <h2 className='text-3xl leading-[0.75rem] tracking-[1.44px] font-medium'>Page Not Found</h2>
        <p className='opacity-50 pt-5 text-lg'>Could not find requested resource</p>
        <button className='mt-3'>
          <Link href='/' className="border-2 px-8 border-black py-2 rounded-xl text-sm leading-[22.4px] tracking-[3.36px] font-semibold">Return Home</Link>
        </button>
      </div>
    </section>
  )
}