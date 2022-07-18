import './pokemonSelected.css'

export const PokemonSprites = ({ img, name }) => {
    return (
        <div className='cards-sprites-item'>
            <img src={img} alt={name} />
        </div>
    )
}