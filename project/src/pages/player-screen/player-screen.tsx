import { useParams } from 'react-router-dom';
import { Films } from '../../types/film';
import NotFoundScreen from '../not-found/not-found';

type PlayerScreenProps = {
  films: Films;
}

export default function PlayerScreen({ films }: PlayerScreenProps): JSX.Element {
  const params = useParams();

  if (!params.id) {
    return <NotFoundScreen />;
  }

  const playFilm = films[films.findIndex((film) => (film.id === Number(params.id)))];

  return (
    <div className="player">
      <video src={playFilm.video} className="player__video" poster={playFilm.poster} />
      <button type="button" className="player__exit">Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={30} max={100} />
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
