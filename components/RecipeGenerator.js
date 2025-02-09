// // // components/RecipeGenerator.js
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const RecipeGenerator = () => {
// //   const [ingredients, setIngredients] = useState('');
// //   const [recipes, setRecipes] = useState([]);
// //   const [loading, setLoading] = useState(false);

// //   const fetchRecipes = async () => {
// //     if (!ingredients.trim()) {
// //       alert('Please enter ingredients.');
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const response = await axios.get(`/api/recipes?ingredients=${ingredients}`);
// //       setRecipes(response.data);
// //     } catch (error) {
// //       console.error('Error fetching recipes:', error);
// //       alert('Failed to fetch recipes. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
// //       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
// //         {/* Header Section */}
// //         <div className="text-center mb-8">
// //           <h1 className="text-4xl font-bold text-gray-800 mb-2">
// //             🍳 AI Recipe Generator
// //           </h1>
// //           <p className="text-gray-600">Transform your ingredients into delicious meals</p>
// //         </div>

// //         {/* Input Section */}
// //         <div className="space-y-6">
// //           <div>
// //             <label className="block text-gray-700 text-sm font-semibold mb-2">
// //               Enter Ingredients
// //             </label>
// //             <input
// //               type="text"
// //               placeholder="e.g., chicken, potatoes, garlic"
// //               value={ingredients}
// //               onChange={(e) => setIngredients(e.target.value)}
// //               className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-lg placeholder-gray-400"
// //               onKeyPress={(e) => e.key === 'Enter' && fetchRecipes()}
// //             />
// //           </div>

// //           <button
// //             onClick={fetchRecipes}
// //             disabled={loading}
// //             className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-2"
// //           >
// //             {loading ? (
// //               <>
// //                 <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
// //                 <span>Generating Recipes...</span>
// //               </>
// //             ) : (
// //               '✨ Generate Recipes'
// //             )}
// //           </button>
// //         </div>

// //         {/* Recipes Grid */}
// //         {recipes.length > 0 && (
// //           <div className="mt-12">
// //             <h2 className="text-2xl font-bold text-gray-800 mb-6">Suggested Recipes</h2>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               {recipes.map((recipe) => (
// //                 <div key={recipe.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
// //                   <div className="relative h-48">
// //                     <img 
// //                       src={recipe.image} 
// //                       alt={recipe.title} 
// //                       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
// //                     />
// //                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
// //                   </div>
// //                   <div className="p-6">
// //                     <h3 className="text-xl font-semibold text-gray-800 mb-4">{recipe.title}</h3>
// //                     <button
// //                       onClick={() => window.open(
// //                         `https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, '-').toLowerCase()}-${recipe.id}`
// //                       )}
// //                       className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
// //                     >
// //                       <span>View Recipe</span>
// //                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// //                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
// //                       </svg>
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default RecipeGenerator;



// // components/RecipeGenerator.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const RecipeGenerator = () => {
//   const [ingredients, setIngredients] = useState('');
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchRecipes = async () => {
//     if (!ingredients.trim()) {
//       alert('Please enter ingredients.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.get(`/api/recipes?ingredients=${ingredients}`);
//       setRecipes(response.data);
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//       alert('Failed to fetch recipes. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
//       <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 transition-all duration-300 hover:shadow-3xl">
//         {/* Header Section */}
//         <div className="text-center mb-10">
//           <h1 className="text-5xl font-bold text-gray-800 mb-4">
//             🍳 AI Recipe Generator
//           </h1>
//           <p className="text-xl text-gray-600">Transform your ingredients into delicious meals</p>
//         </div>

//         {/* Input Section */}
//         <div className="space-y-8">
//           <div>
//             <label className="block text-gray-700 text-lg font-semibold mb-3">
//               Enter Ingredients
//             </label>
//             <input
//               type="text"
//               placeholder="e.g., chicken, potatoes, garlic"
//               value={ingredients}
//               onChange={(e) => setIngredients(e.target.value)}
//               className="w-full p-5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-xl placeholder-gray-400"
//               onKeyPress={(e) => e.key === 'Enter' && fetchRecipes()}
//             />
//           </div>

//           <button
//             onClick={fetchRecipes}
//             disabled={loading}
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-5 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xl flex items-center justify-center gap-3"
//           >
//             {loading ? (
//               <>
//                 <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
//                 <span>Generating Recipes...</span>
//               </>
//             ) : (
//               '✨ Generate Recipes'
//             )}
//           </button>
//         </div>

//         {/* Recipes Grid */}
//         {recipes.length > 0 && (
//           <div className="mt-12">
//             <h2 className="text-3xl font-bold text-gray-800 mb-8">Suggested Recipes</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {recipes.map((recipe) => (
//                 <div key={recipe.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
//                   <div className="relative h-56">
//                     <img 
//                       src={recipe.image} 
//                       alt={recipe.title} 
//                       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-2xl font-semibold text-gray-800 mb-4">{recipe.title}</h3>
//                     <button
//                       onClick={() => window.open(
//                         `https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, '-').toLowerCase()}-${recipe.id}`
//                       )}
//                       className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-3 text-lg"
//                     >
//                       <span>View Recipe</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RecipeGenerator;



// components/RecipeGenerator.js
import React, { useState } from 'react';
import axios from 'axios';

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    if (!ingredients.trim()) {
      alert('Please enter ingredients.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`/api/recipes?ingredients=${ingredients}`);
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      alert('Failed to fetch recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex  justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4 pt-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🍳 AI Recipe Generator
          </h1>
          <p className="text-gray-600">Transform your ingredients into delicious meals</p>
        </div>

        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Enter Ingredients
            </label>
            <input
              type="text"
              placeholder="e.g., chicken, potatoes, garlic"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all text-lg placeholder-gray-400"
              onKeyPress={(e) => e.key === 'Enter' && fetchRecipes()}
            />
          </div>

          <button
            onClick={fetchRecipes}
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                <span>Generating Recipes...</span>
              </>
            ) : (
              '✨ Generate Recipes'
            )}
          </button>
        </div>

        {/* Recipes Grid */}
        {recipes.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Suggested Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recipes.map((recipe) => (
                <div key={recipe.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-48">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{recipe.title}</h3>
                    <button
                      onClick={() => window.open(
                        `https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, '-').toLowerCase()}-${recipe.id}`
                      )}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2"
                    >
                      <span>View Recipe</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeGenerator;

