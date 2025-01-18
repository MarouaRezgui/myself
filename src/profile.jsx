
import './style.css';

const profile = () => {
    return(
        <div className='card'>
            <div className='card_avatar'>
                <img src="./avatar.jpg" alt=" "/>
            </div>
            <div className='card_intro'>
                <h2 className='name'>Rezgui Maroua</h2>
                <p className='intro'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aut
                dignissimos labore exercitationem libero, eius iste necessitatibus eos.</p>
           
            <div className='skills'>
                <span className='html'>HTML+CSS 💪</span>
                <span className='javascript'>javascript 💪</span>
                <span className='react'>React 💪</span>
                <span className='git'>Git+Github💪</span>
                <span className='node'>NodeJs+expressJs 💪</span>
            </div>
            </div>
        </div>





    );
};
export default profile;