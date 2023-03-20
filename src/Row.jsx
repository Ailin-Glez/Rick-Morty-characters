import { AiFillEye } from 'react-icons/ai';

import styles from './Row.module.css';

function Row({ character, index, handleEyeClick }) {

    return (
        <>
            {/* {isCardOpened && <Card details={character} /> } */}
                <tr className={`myTable ${index % 2 !== 0 && 'odd'}`}>
                    <td>{character.name}</td>
                    <td>{character.status}</td>
                    <td>{character.species}</td>
                    <td><AiFillEye className={styles.eyeBtn} onClick={() => handleEyeClick(character)} /></td>
                </tr>
        </>
    );
}

export default Row;