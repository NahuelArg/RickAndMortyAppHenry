import styles from './About.module.css';


const { card, cardBody, cardContent, imageContainer, cardFooter } = styles;

export default function About() {
    return (
        <div className={card}>
            <h1>Welcome to About</h1>
            <div className={cardBody}>
                <div className={cardContent}>
                  <h1>Hola! Soy Nahuel Argañaraz y diseñé este Rick and Morty App</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni vel est, laboriosam ab enim maiores distinctio similique accusantium porro ullam incidunt quia fuga, explicabo numquam quidem debitis veritatis nesciunt! Enim?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur consectetur voluptate, quo voluptas consequuntur magnam fugit, inventore placeat aliquam temporibus sapiente? Possimus doloribus dolorum voluptates ea sit laudantium facilis commodi?</p>
                </div>
            </div>
            
        </div>
    );
}
