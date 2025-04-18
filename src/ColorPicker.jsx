import React, {useState} from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState("white");
    const handleColorChange = (e) => setColor(e.target.value);

    return (
        <div className='h-screen snap-start bg-violet-100 flex items-center justify-center font-sans'>
            <div className='border-2 border-purple-800 w-[50%] max-w-[500px] text-[rgb(33_12_12)] py-6 flex flex-col items-center rounded-md'>
                <h1 className='text-4xl text-bold text-white text-shadow-2xs  mb-3'>Color Picker</h1>
                <div style={{backgroundColor: color}} className='w-[50%] py-14 rounded-xl text-center mb-4'>
                    Selected Color: {color}
                </div>
                <label htmlFor="" className='text-gray-500'>Select a color 👇🏽 </label>
                <input type="color" onChange={handleColorChange} className='w-[60px] h-[35px] rounded-2xl focus:outline-0 cursor-pointer'/>
            </div>
        </div>
    )
}

export default ColorPicker