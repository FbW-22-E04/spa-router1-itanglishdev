import '../App.css'

function Hobbies() {
  return (
    <div className="h-[300px] bg-sky-200  m-[20px] p-[20px] ">
      <p>Hobby #1</p>
      <div className='flex gap-[10px]'>
        <img className='w-[70px] h-[70px]' src="https://picsum.photos/400/400" alt="" />
        <img className='w-[70px] h-[70px]' src="https://picsum.photos/300/300" alt="" />
        <img className='w-[70px] h-[70px]' src="https://picsum.photos/100/100" alt="" />
        <img className='w-[70px] h-[70px]' src="https://picsum.photos/500/500" alt="" />
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Hobbies;