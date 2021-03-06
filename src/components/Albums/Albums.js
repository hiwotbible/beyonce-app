import React, { Component } from 'react';
import propTypes from 'prop-types';
import Album from "../Album/Album";
class Albums extends Component {
  constructor () {
    super();
    this.state={
      albums:[]
    }
  }
    componentDidMount() { 
    fetch ('https://rawgit.com/rarmatei/f5ae92ac93d9716affab822a3f54f95b/raw/e62641b3f5ddd12c4fe34aa0912488224594e5a7/beyonce-albums.json')
    .then(response => response.json())
    .then(album => {
      this.setState({ Albums: AlbumData })
    })
  }
  render() {
    return (
      <div>
      {this.state.albums.map(album=>(
        <Album 
        releaseDate={album.releaseDate}
        album={album.collectionName}
        imageUrl={album.artworkUrl100}
        genre={album.primaryGenreName}/>
      ))
      })
      </div>
    )
  }
}

Albums.propTypes = {

};

export default Albums;
