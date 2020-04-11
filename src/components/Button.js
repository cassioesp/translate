import React from 'react';
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
    static contextType = LanguageContext;


    render() {

        const language = this.context.language === 'english' ? 'Submit' : 'Voorleggen';

        return (
            <button className="ui primary">
                {language}
            </button>
        )
    }
}

export default Button;