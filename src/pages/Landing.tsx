import Images from "../assets/images/images";

export default function Landing() {
  const { logo } = Images;
  return (
    <main>
      <header>
        <div>
          <img src={logo} />
        </div>
      </header>
    </main>
  );
}
