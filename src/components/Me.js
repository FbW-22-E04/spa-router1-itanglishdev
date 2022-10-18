import '../App.css'

function App() {
  return (
    <div className="h-[350px] bg-sky-200  m-[20px] p-[30px] max-w-3xl">
      <div className='flex '>
        <div>
          <img className='w-[110px] h-[100px]' src="https://picsum.photos/400/400" alt="" />

        </div>
        <div className='ml-[40px]'>
          <p><strong>My Name</strong> </p>
          <p className='mt-[20px]'>Urem pisces latte ad finem, mors tua vita mea, porquoi facimme tutt# cose e ne sapimm# megl# e# te!</p>
          <p className='mt-[20px]'>Another paragraph here</p>
          <ul className='mt-[20px]'>
            <a href="https://www.google"><li>Some outside link</li></a>
            <a href=""><li>Some other outside link</li></a>
            <a href=""><li>Third but not least</li></a>

          </ul>
        </div>
      </div>

    </div>
  )
}

export default App
