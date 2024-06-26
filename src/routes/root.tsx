import Home from 'src/pages/home/Home';

export default function Root() {
  return (
    <>
      {/* <div
        className="universe-background"
        style={{ backgroundImage: 'url(/assets/background.webp)' }}
      ></div> */}
      <div className="container m-auto p-4">
        <Home />
      </div>
    </>
  );
}
