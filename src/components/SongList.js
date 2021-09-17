import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {

    renderedList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">Select</button>
                    </div>
                    <h1 className="content">{song.title}</h1>
                </div>
            )
        })
    }

    render() {
        // this.props = {songs : state.songs}
        console.log(this.props)
        return (
            <div className="ui divided list">{this.renderedList()}</div>
        )
    }
}

// Function ysed to get state from Provider and store as Props for this component 
const mapStateToProps = (state) => {
    return { songs: state.songs }
}


export default connect(mapStateToProps)(SongList);