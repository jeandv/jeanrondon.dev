const SectionContainer = ({ children }: { children: React.ReactNode; }) => {
  return (
    <section className='w-full lg:max-w-screen-md flex flex-col justify-center items-center lg:mx-auto mt-8 pb-16'>

      {children}

    </section>
  )
}

export default SectionContainer;
