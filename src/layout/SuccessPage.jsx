import React from 'react';
import classes from './SuccessPage.module.css';

function SuccessPage() {
    return (
        <div className={classes.successContainer}>
            <h1>Заявка отправлена!</h1>
            <p>Ждите ответа менеджера в ближайшее время.</p>
            <button onClick={() => window.location.href = '/'}>
                Вернуться на главную
            </button>
        </div>
    );
}

export default SuccessPage;