import React from 'react'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='text-center p-6 py-20 lg:p-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
            Contact
            <span className='underline underline-offset-4 under decoration-1 font-light ml-2'>
                With Us
            </span>
        </h1>
        <p className='text-gray-500 max-w-80 text-center mb-12 mx-auto'>
            Ready to Make a Move? Let’s Build Your Future Together
        </p>

        <form onSubmit={onSubmit} action="" className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 text-left'>
                    Your Name
                    <input type="text" name='Name' placeholder='Your Name' required className='w-full border border-gray-300 rounded py-3 px-4 mt-2' />
                </div>
                <div className='w-full lg:w-1/2 text-left md:pl-4'>
                    Your Email
                    <input type="text" name='Email' placeholder='Your Email' required className='w-full border border-gray-300 rounded py-3 px-4 mt-2' />
                </div>
            </div>
            <div className='my-6 text-left'>
                Message
                <textarea 
                    className='w-full border border-gray-300 rounded py-3 px-4 mt2 h-48 resize-none' 
                    name="Message" placeholder='Message' required>

                </textarea>
            </div>
            <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>
                {result ? result : "Send Messsage"}
            </button>
        </form>
    </div>
  )
}

export default Contact