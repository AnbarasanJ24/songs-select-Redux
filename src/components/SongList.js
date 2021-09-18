import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
class SongList extends React.Component {

    renderedList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            onClick={() => this.props.selectSong(song)}
                            className="ui button primary">Select</button>
                    </div>
                    <h1 className="content">{song.title}</h1>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui divided list">{this.renderedList()}</div>
        )
    }
}

// Function ysed to get state from Provider and store as Props for this component 
const mapStateToProps = (state) => {
    console.log(state)
    return { songs: state.songs }
}


export default connect(mapStateToProps, { selectSong })(SongList);