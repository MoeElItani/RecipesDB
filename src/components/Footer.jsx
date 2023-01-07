import './Styles.scss'

const Footer = () => {
   return (
      <div className='footer'>
         <svg
            className='waves'
            href='http://www.w3.org/2000/svg'
            viewBox='0 24 150 28'
            preserveAspectRatio='none'
            shapeRendering='auto'
         >
            <defs>
               <path
                  id='gentle-wave'
                  d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
               />
            </defs>
            <g className='parallax'>
               <use
                  href='#gentle-wave'
                  x='48'
                  y='3'
                  fill='#D5E2E0'
               />
               <use
                  href='#gentle-wave'
                  x='48'
                  y='5'
                  fill='#1DE9B6'
               />
               <use
                  href='#gentle-wave'
                  x='48'
                  y='7'
                  fill='#004D40'
               />
            </g>
         </svg>
         <footer className='h-[15vh] bg-[#004D40] flex flex-col justify-center content-center text-center text-white'>
            <p className='font-semibold my-[0.5rem]'>
               &copy; 2022 RecipesDB | All Rights
               Reserved{' '}
            </p>
            <p className='my-[0.25rem]'>
               Visit my {' '}
               <a
                  href='https://portfolio-moeelitani.vercel.app/'
                  target='_blank'
                  rel='noreferrer'
                  className='underline underline-offset-1'
               >
                 web portfolio
               </a>
            </p>
         </footer>
      </div>
   )
}

export default Footer
