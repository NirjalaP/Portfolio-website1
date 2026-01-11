import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>

      <div className='space-y-8 pl-30 pr-30'>
        <div className='animate-fade-in'>
        <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
      </div>

      <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>Building the future,
        <span className='font-serif italic font-normal text-white'>
          {" "} one component at a time.</span>
      </h2>
      <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
        <p>I’m a passionate frontend-focused developer who loves turning ideas into clean, responsive, and user-friendly web experiences. I enjoy building modern interfaces with technologies like React, Tailwind CSS, and JavaScript, always aiming for code that’s both readable and scalable.</p>
        <p>Over time, I’ve worked on projects ranging from interactive dashboards to full-stack applications, integrating APIs and handling real-world features like authentication, data fetching, and state management. I’m comfortable using tools like Git, GitHub, and Vercel to collaborate and deploy projects efficiently.</p>
        <p>I’m constantly learning and improving my skills, exploring better ways to write cleaner code and create smoother user experiences. My goal is to build products that not only look good but also feel intuitive and reliable for users.</p>
      </div>
        </div>
        </div>
    </section>
  )
}

export default About