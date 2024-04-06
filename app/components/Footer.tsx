import React from 'react';
import '../styles/footer.scss';

const Footer: React.FC = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-container'></div>
        </div>
    )
}

export default React.memo(Footer);