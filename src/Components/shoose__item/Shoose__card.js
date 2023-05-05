import React, { Component } from 'react'

export default class shoose__card extends Component {
  render() {
    return (
      <div key={shoose.id} className={styles.item}>
        <div
            className={styles.image}
            style={{
                backgroundImage: `url(${image1.jpeg})`,
            }}
        />

        <div className={styles.info}>
            <h2>{shoose.name}</h2>
            <p>
                {new Inti.NumberFormat('ru-RU', {
                    style:'currency',
                    currency: 'USD',
                }).format(shoose.price)}
            </p>
            <button>Add to Card</button>
        </div>
      </div>
    )
  }
}
