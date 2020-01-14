import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import songs from '../const/songs';

class App extends React.PureComponent {
  state = {
    songs,
    selectedSong: null
  };

  onSongSelect = (selectedSong) => this.setState({selectedSong})

  render() {
    const { songs, selectedSong } = this.state;
    return (
      <div className="container" style={{ minHeight: '100vh' }}>
        <div className="card mb-3 mx-auto">
          <h5 className="card-header">React Songs</h5>
          <div className="row no-gutters">
            <div className="col-md-8">
              <SongList songs={songs} onSongSelect={this.onSongSelect}/>
            </div>
            <div className="col-md-4">
              <SongDetail selectedSong={selectedSong} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
