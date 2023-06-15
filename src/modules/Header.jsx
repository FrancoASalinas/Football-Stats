export default function Header({ onCheck, onClick }) {
  return (
    <header className="header">
      <label htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={onCheck} value={true} />
        <span></span>
      </label>
      <h1 className="title">
        <span>Football</span>
        <span>Stats</span>
        <div className="football-container">
          <img className="football" src="../public/pngwing.com.png" />
        </div>
      </h1>
      <p className="presentation">
        <span className="left">The </span>
        <span className="right">place </span>
        <span className="left">where </span>
        <span className="right">you </span>
        <span className="left">get </span>
        <span className="left">all </span>
        <span className="right">the </span>
        <span className="left">numbers </span>
        <span className="right"> of </span>
        <span className="left"> your </span>
        <span className="right"> favorite </span>
        <span className="left">sport </span>
      </p>
      <div className="anim-button-container">
        <div className="anim-arrow"></div>
        <button className="button" onClick={onClick}>
          Let's go!
        </button>
        <div className="anim-arrow--right"></div>
      </div>
    </header>
  );
}
