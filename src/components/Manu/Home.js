import React, { Component } from 'react'
import './Home.css'
import Cards from '../Card/Cards'

export default class Home extends Component {
    render() {
        return (
            <div className='home'>
                <img className = 'img' src = "https://media.discountwatchstore.com/media/wysiwyg/2019-11-12_PhilipStein_homepage.jpg"/>
                <Cards />
            </div>
        )
    }
}
