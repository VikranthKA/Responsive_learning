import React, { useState } from 'react';
import './String.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EventHandlerEx() {
  const [fruits, setFruits] = useState([{ name: 'apple' }, { name: 'banana' }, { name: 'chiku' }]);
  const [newFruit, setNewFruit] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleClick = () => {
    toast(fruits.length + ' is the total number of fruits');
  };

  const handleShow = (ele) => {
    toast('You selected ' + ele);
  };

  const vowels = 'aeiouAEIOU';

  const handleVowel = (ele) => {
    let count = 0;
    for (let i = 0; i < ele.length; i++) {
      if (vowels.includes(ele[i])) {
        count += 1;
      }
    }
    toast('The vowel count in "' + ele + '" is ' + count);
  };

  const handleFirstChar = (ele) => {
    toast('The first character is ' + ele[0]);
  };

  const handleLastChar = (ele) => {
    toast('The last character is ' + ele[ele.length - 1]);
  };

  const handleCharCode = (ele) => {
    const charCodes = ele.split('').map(char => char.charCodeAt(0)).join(', ');
    toast(`Character codes in "${ele}" are: ${charCodes}`);
  };

  const handleAddFruit = () => {
    if (newFruit.trim()) {
      if (editIndex !== null) {
        const updatedFruits = [...fruits];
        updatedFruits[editIndex] = { name: newFruit.trim() };
        setFruits(updatedFruits);
        setEditIndex(null);
      } else {
        setFruits([...fruits, { name: newFruit.trim() }]);
      }
      setNewFruit('');
    } else {
      toast('Please enter a valid fruit name');
    }
  };

  const handleEditFruit = (index) => {
    setNewFruit(fruits[index].name);
    setEditIndex(index);
  };

  const handleDeleteFruit = (index) => {
    setFruits(fruits.filter((_, i) => i !== index));
    toast('Fruit deleted');
  };

  return (
    <div className="container">
      <h2>Fruits List</h2>
      <button className="fruit-button" onClick={handleClick}>
        Check Fruit Count
      </button>

      <input
        type="text"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
        placeholder="Enter a new fruit"
        className="input-field"
      />
      <button className="add-button" onClick={handleAddFruit}>
        {editIndex !== null ? 'Update Fruit' : 'Add Fruit'}
      </button>

      <table className="fruit-table">
        <thead>
          <tr>
            <th>Fruit Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit, index) => (
            <tr key={index}>
              <td>{fruit.name.toUpperCase()}<br/>
              <div className='edit-delete'>

              </div>
              <button className="action-button" onClick={() => handleEditFruit(index)}>
                  Edit
                </button>
                <button className="action-button" onClick={() => handleDeleteFruit(index)}>
                  Delete
                </button>
              </td>
              <td>
                <button className="action-button" onClick={() => handleShow(fruit.name)}>
                  Show
                </button>
                <button className="action-button" onClick={() => handleVowel(fruit.name)}>
                  Count Vowels
                </button>
                <button className="action-button" onClick={() => handleFirstChar(fruit.name)}>
                  First Letter
                </button>
                <button className="action-button" onClick={() => handleLastChar(fruit.name)}>
                  Last Letter
                </button>
                <button className="action-button" onClick={() => handleCharCode(fruit.name)}>
                  Show Char Codes
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

export default EventHandlerEx;
