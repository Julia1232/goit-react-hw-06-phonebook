import { Audio } from 'react-loader-spinner'

import s from './LoaderComponent.module.css';

function LoaderComponent() {
  return (
    <div className={s.overlay}>
      <Audio type="ThreeDots" color="#00BFFF" height="32" />
    </div>
  );
}

export default LoaderComponent;
