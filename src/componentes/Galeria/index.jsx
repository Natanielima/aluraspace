import React, { useState } from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'
import fotos from './fotos.json'
import Cards from './Cards'


export default function Galeria() {
  const [itens, setItens]= useState(fotos);

  const tags = [...new Set(fotos.map((valor)=>valor.tag))]

  const filtrarFotos = (tag)=>{
    const novasFotos= fotos.filter((foto)=>{
      return foto.tag ===tag
    })
    setItens(novasFotos)
  }

  const aoFavoritar =(id)=>{
    setItens(itens.map(item=>{
      if(item.id===id) item.favorito = !item.favorito
      return item}))
  }
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}/>
        <div className={styles.galeria__principal}> 
        {itens.map(itens=>{
          return <Cards itens={itens} id={itens.id} imagem={itens.imagem} titulo={itens.titulo} creditos={itens.creditos} favorito={itens.favorito} aoFavoritar={aoFavoritar}/>
        })  
        }

        </div>
        
    </section>
  )
}
