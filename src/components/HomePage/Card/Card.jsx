import React from "react";
import styles from "../Card/Card.module.css"; 
import { Link } from "react-router-dom"; 


function Card ({
    id,
    image,
    name,
    height,
    weight,
    life_span
}) {
    //Esto es porque en la api aparece esa info como objeto y quiero acceder a las propiedades 
    const heightToDisplay = typeof height === 'object' ? height.metric : height;
    const weightToDisplay = typeof weight === 'object' ? weight.metric : weight;
    const imageToDisplay = typeof image === 'object' ? image.url : image;

    return (
        <div className={styles.cardContainer}>
            <Link to={`/detail/${id}`} className={styles.link}>
                <h1 className={styles.title}>{name}</h1>
            </Link>

            <img className={styles.img} src={imageToDisplay} />

            <div className={styles.description}>
                <div className={styles.containerIconH}>
                    <img className={styles.iconH}  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAADrElEQVR4nO2X2WtTQRTGR50z097bpqZL7p1JxQcXFKkoWFALWhF9UHB50BdBtApaKyguICrqgy8qIi5Q21pv3BB8ExVcEP0PfHFBEVRU0LoXq6lLR06Sm0xiWk1ym+uDHxxIZi7Dj5lzznxDyH/9V94awphYCCAOMCZaAcQqQoRB/gWZZsgCkNcYk0oPAPGIUrveVzjDqLEB5H0N7BOAfK3976ZUNPwjcKKTkNpSnKNUNjMmf/gGaZpWiDF5V4M7SQgZqn8DIJcyJr8nvvnMebjRJziJ+XbD3T2U6iQ10QjdsndJ4BLnyZ0cfEjzd7inKUh5HSG/naLTohHa1RuhCuP8+jJVWiL7Bh3SNK0QgLynwXUgEIC47I5ZQfvOu1boduGKCslY+K2Wc63Y++IzCCmvu3NNjZVpcG6cWlumSngSstvzFsSY7NUAN+pzDw7wxjl11bGCWDClKitgJiSAeKjnbZ4azbGd4C/O5WzG5McEZB/nsgXHYznn0E+fO0Fd2WqorlbWLyDGsRXlWnHJprzRECxRED8ZC8/DMYDwRMZkl3tMLtxAQJkRdaiSVXYMsNwQbZ40YYDwcncOoLYOQNyqH2W15QqH8aEdVGVAxNZdNSv4RF0gpYU24S8AcpL+TT475+7e6lmVySO+uMlUUWdYRwFwyXiDx1so3Lo5weSa8yZXu+N9PSeIzAeug1J7LRZEYiffb1tQsdILuLqRlnpxNFVM3xw6NWc4925lTGxwIUWl3fdgP88ZrmVuCm7CCEs9O5xaIxqhPeoMCeQC95QQy9S/mTG+5hDn8fmDywKewWF8jdD1fzKbup9Lu1f1nDvdXBY7ppfa0RQKF43Q3QOd7JB0J2y361cWgNxXSEG0FAiHubUo3Wzi3Rq7V6/iWMO40BHf4FDxB07cpmfciUPPritb6CscCh1J4ihfpZxJYX2uxSs4FIBY7S6GbwgcU+dIda9DX/sOF5cw0PIkFv2B9y3adC+a8PMjGZXuDNtD8hGaRnQlLuSuxYEruQLe3G4MDlwKUk53ITmXP5015TkBPjvM1Rhpq2ljQ97DZYNEx5srZG+28AouBSkadEi05/3l3Ob5w9X4Wkvd3lma/ZvcC8IbyKhDVbNWEDsWVRQPrj9IfEMg2Id2SDObmZapKHDZIDHCVbYKlosBq7VocClIu17rk2lO2Led+10x89BkGOL4ypnBx/iGKHrO/a2UQ0rwgYNviARYz4Bm0y/1nCAS3xCqjVT4zVJ0/QJobz6nEoy2ZgAAAABJRU5ErkJggg=="></img>

                    <h2>Height: {heightToDisplay}</h2>
                </div>
                
                <div className={styles.containerIconW}>
                    <img className={styles.iconW} src="data:image/png;base64,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"></img>
                    
                    <h2>Weight: {weightToDisplay}</h2>
                </div>

                <div className={styles.containerIconLife}>
                    <img className={styles.iconLife} src="data:image/png;base64,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"></img>
                    <h2>Life Span: {life_span}</h2>

                </div>
               
               
            </div>
        </div>
)}; 
 
export default Card;