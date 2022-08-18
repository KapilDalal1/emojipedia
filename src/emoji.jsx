import React from 'react';
import Card from './card';
import info from './emojiInfo';

function createCard(info) {
    return (
        < Card
            key={info.id}
            emoji={info.emoji}
            heading={info.name}
            desc={info.about}
        />
    );
}

function emojiCard() {
    return (
        <div className="row align-items-center justify-content-center">
            {info.map(createCard)}
        </div>
    );
}

export default emojiCard;