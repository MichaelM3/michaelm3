const Demo = ({ demo: { title, link, description, tech } }) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="dark:text-white text-2xl">{title}</h3>
      <iframe className="w-[600px] h-[400px] shadow shadow-slate-800 dark:shadow-white shadow-lg" src={link}></iframe> 

    </div>
  )
}

export default Demo
