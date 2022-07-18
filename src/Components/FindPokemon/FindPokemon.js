import PropTypes from 'prop-types';
import {useForm} from '../../hooks/useForm';
import './findPokemon.css'; 

export const FindPokemon = ({ setPokemons }) => {

    const [formValue, handleInputValue] = useForm({
        name: '',
    });

    const {name} = formValue;

    const onSubmit = (event) => {
        if(event.key === 'Enter' && name.trim().length > 1) {
            setPokemons(name);
        }
    }

    return (
        <>
            <input
                className='input'
                type="text"
                placeholder='Buscar'
                name='name'
                value={name}
                onChange={handleInputValue}
                onKeyPress={onSubmit}
            />
        </>
    )
}


FindPokemon.propTypes = {
    setPokemons: PropTypes.func.isRequired
}

export default FindPokemon;