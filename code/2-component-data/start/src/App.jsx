import './index.css'
import React from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle';
import IngredientList from './IngredientList';
import Procedure from './Procedure';
// TODO: Import IngredientList


function App() {
    // TODO: Add recipe object
const recipe = {
    title: 'Mashed potatoes',
    feedback: {
        rating: 4.8,
        reviews: 20
    },
    ingredients: [
        { name: '3 potapoes, cut into 1/2" pieces', prepared: false },
        { name: '4 Tbsp butter', prepared: false },
        { name: '1/8 cup heavy cream', prepared: false },
        { name: 'Salt', prepared: true },
        { name: 'Pepper', prepared: true }
    ],
    procedures: [
        { process: '1.濃い塩水が入った鍋に、カットしたジャガイモを加えます。', prepared: true },
        { process: '2.鍋を沸騰させます。', prepared: false },
        { process: '3.フォークを刺せるくらいの柔らかさまでジャガイモを茹でます (約 15-20 分)。', prepared: false },
        { process: '4.ジャガイモをざるにあけます。', prepared: false },
        { process: '5.ジャガイモを鍋に戻します。', prepared: false },
        { process: '6.バター、クリーム、塩、こしょうを加えて好みの味にします。', prepared: false },
        { process: '7.ジャガイモをマッシュします。', prepared: false },
        { process: '8.必要に応じて味を調え、バターとクリームを追加します。', prepared: false }
    ]
}
    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={ recipe.title } feedback={ recipe.feedback } />
            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />
            <Procedure procedures={recipe.procedures} />
        </article>
    )
}

export default App;
