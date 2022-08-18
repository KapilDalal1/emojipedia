import React from 'react';
import Header from './header';
import EmojiCards from './emoji';

function App() {
    return (
        <div>
            <Header />
            <EmojiCards />
            <h3 className="text-secondary text-center mb-0">By Harsh Verma</h3><br />
            <h3 className="text-pink text-center mt-0">instagram/jsninja_harsh</h3>
            <h3 className="text-info text-center mt-0">twitter/jsninja_harsh</h3>
        </div>
    );
}

export default App;