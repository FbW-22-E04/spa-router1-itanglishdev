import '../index.css'
import '../App.css'

function Contact() {
  return (
    <div className="flex flex-col items-center h-[350px] bg-sky-200  m-[20px] p-[20px] max-w-3xl space-y-4">
      <p>Contact Me here</p>
      <form action="" className='flex flex-col h-[200px] space-y-4' >
        <label htmlFor=""><input type="text" placeholder='Your Name required' /></label>
        <label htmlFor=""><input type="email" placeholder='Your Email required' /></label>
        <label htmlFor=""><input className="h-[60px]" type=" text" placeholder='Your message' required /></label>
        <label htmlFor=""><button className='rounded-lg text-center  bg-orange-400 w-[240px] h-[30px]  ' >Send Message</button></label>
      </form>

    </div>
  );
}

export default Contact;