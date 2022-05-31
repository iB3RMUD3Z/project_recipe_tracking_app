import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };
  
  const [formData, setFormData] = useState({ ...initialFormState });
  
  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
    
  const handleCreate = (event) => {
    event.preventDefault();
    setRecipes([...recipes, {...formData}])
    setFormData({ ...initialFormState });
  };


  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={handleCreate}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" type="text" required={true} placeholder="Name" value={formData.name} onChange={handleChange}/>
            </td>
            <td>
              <input id="cuisine" name="cuisine" type="text" required={true} placeholder="Cuisine" value={formData.cuisine} onChange={handleChange}/>
            </td>
            <td>
              <input id="photo" name="photo" type="URL" required={true} placeholder="URL" value={formData.photo} onChange={handleChange}/>
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" required={true} placeholder="Ingredients" value={formData.ingredients} onChange={handleChange}/>
            </td>
            <td>
              <textarea id="preparation" name="preparation" required={true} placeholder="Preparation" value={formData.preparation} onChange={handleChange}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
