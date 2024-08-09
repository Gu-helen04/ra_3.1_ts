import Star from './Star';
import { IStars } from "../models"

export default function Stars(props: IStars) {
    console.log(props)
    const { count } = props;

    const starsArr = Array.from({ length: count }, (v, k) => k+1)

    return (
        <ul className='card-body-stars u-clearfix'>
            {starsArr.map(item => 
                <li key={item}><Star /></li>
            )}
        </ul>
    )
}