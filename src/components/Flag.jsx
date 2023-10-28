import ng from '../assets/ng.svg'

export default function Flag({ details }){

  const name = details.name
  const population= details.population
  const region = details.region
  const flag = details.flags.svg
  const capital = details.capital

  return(
    <div className='rounded-xl bg-white dark:bg-dark-blue dark:text-white '>
      <img src={flag} alt="" className='rounded-t-xl w-full h-[200px] lg:h-[180px] object-cover'/>
      <div className='px-6 py-8 lg:p-6 '>
        <h2 className='font-bold text-2xl mb-4 lg:mb-3'>{name}</h2>
        <p className='text-lg mb-2 lg:mb-1'><span className='font-semibold'>Population: </span>{population}</p>
        <p className='text-lg mb-2 lg:mb-1'><span className='font-semibold'>Region: </span>{region}</p>
        <p className='text-lg '><span className='font-semibold'>Capital: </span>{capital}</p>
      </div>
    </div>
  )
}