import React from 'react'   
import{ AiFillHeart, AiOutlineHeart, AiOutlineArrowsAlt} from 'react-icons/ai'
import styles from '../Galeria.module.scss'

export default function Cards({aoFavoritar,id,imagem, titulo, creditos, favorito,itens}) {
    function favoritar(){
        aoFavoritar(itens.id)
    }

    const propsFavorito={
        size:25,
        onClick: favoritar
    }
    

  return (
    <ul className={styles.galeria__cards}>
                    <li key={id} className={styles.galeria__card}>
                    <img className={styles.galeria__imagem} src={imagem} alt ={titulo}/>
                    <p className={styles.galeria__descricao}>{titulo}</p>
                    <div>
                        <p>{creditos}</p>
                        <span>
                        <div className='favoritar'>
                            {favorito ? <AiFillHeart {...propsFavorito} color='#ff0000'/> : <AiOutlineHeart {...propsFavorito}/>}
                            <AiOutlineArrowsAlt color='white' />
                        </div>
                        
                            {/* <img src={favorito} alt="ícone coração de curtir"/> */}
                           
                        </span>
                        </div>
                        </li>
    </ul>
  )
}
