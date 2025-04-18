import React, { useState } from 'react';

const MyComponent = () => {
    const [name, setName] = useState("GUEST");
    const handeleNameChange = (e) => {
        setName(e.target.value);
    }

    const [quantity, setQuantity] = useState();
    const handleQuantityChange = (e) => setQuantity(e.target.value);

    const [comment, setComment] = useState();
    const handleCommentChange = (e) => setComment(e.target.value);

    const [payment, setPayment] = useState("");
    const handlePaymentChange = (e) => setPayment(e.target.value);

    const [car, setCar] = useState({
        year:2024,
        make:"Ford",
        model:"Mustang",
    });
    const handleYearChange = (e) => 
        setCar(c => ({...c, year: e.target.value})); 
    const handleMakeChange = (e) => 
        setCar(c => ({...c, make: e.target.value}));
    const handleModelChange = (e) =>  
        setCar(c => ({...c, model: e.target.value}));

    const [foods, setFoods] = useState(['apples', 'peas', 'grapes']);
    function handleAddFood () {
        const newFood = document.querySelector('.food-input').value;
        document.querySelector('.food-input').value = "";
        
        setFoods(f => [...f, newFood]);
    }
    function handleRemoveFood (index) {
        setFoods(foods.filter((_, i) => i !== index))
    }

    const [cars, setCars] = useState(['2011 Camrey bash']);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState('');
    const [carModel, setCarModel] = useState('');

    function AddCar() {
        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel,
        }

        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function RemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index));
    }
    function YearChange(e) {
        setCarYear(e.target.value);
    }
    function MakeChange(e) {
        setCarMake(e.target.value);
    }
    function ModelChange(e) {
        setCarModel(e.target.value)
    }


    return (
        <div className='main-container'>
            <div>
                <input value={name} onChange={handeleNameChange} type='text'/>
                <p>Name: {name}</p>

                <input value={quantity} onChange={handleQuantityChange} type='number' />
                <p>Quantity: {quantity}</p>

                <textarea name="" id="" value={comment} onChange={handleCommentChange} placeholder='Enter Delivery Instructions'></textarea>
                <p>Comment: {comment}</p>

                <select name="" id="" value={payment} onChange={handlePaymentChange}>
                    <option value="">Select an option</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="Giftcard">Giftcard</option>
                </select>
                <p>Payment: {payment}</p>
            </div>

            <div>
                <div>Your Favoure car is: {car.year} {car.make} {car.model}</div>
                <input type="number" value={car.year} onChange={handleYearChange}/><br />
                <input type="text" value={car.make} onChange={handleMakeChange}/><br />
                <input type="text" value={car.model} onChange={handleModelChange}/>
            </div>

            <div>
                <h1>List of Foods</h1>
                <ul>
                    {foods.map((food, index) => (
                        <li key={index} onClick={() => handleRemoveFood(index)}>
                            {food}
                        </li>
                    ))}
                </ul>
                <input type="text" className='food-input' placeholder='Enter Food Name'/>
                <button onClick={handleAddFood}>Add Food</button>
            </div>

            <div>
                <h2>List of Car Objects</h2>
                <ul>
                    {cars.map((car, index) => (
                        car.year && car.make && car.model && (
                            <li key={index} onClick={() => RemoveCar(index)}>
                                {car.year} {car.make} {car.model}
                            </li>))
                            )
                    }
                </ul>
                <input type="number" value={carYear} onChange={YearChange}/>
                <input type="text" value={carMake} onChange={MakeChange} placeholder='Enter Car Make'/>
                <input type="text" value={carModel} onChange={ModelChange} placeholder='Enter Car Model'/>
                <button onClick={AddCar}>Add Car</button> 
            </div>
        </div>
    )
}

export default MyComponent