import React from "react";
import { useEffect } from "react";

const XkcdResults = ({ comic }) => {
  if (comic === null) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{comic.title}</h2>
      <img src={comic.img} alt={comic.alt} style={{ maxWidth: "100%" }} />
      <p>{comic.alt}</p>
      <p>Issue Number: {comic.num}</p>
      <p>Date: {`${comic.day}-${comic.month}-${comic.year}`}</p>
    </div>
  );
};

function XkcdInfo() {
  const [comic, setComic] = React.useState(null);
  const latest = React.useRef(null);
  const [form, setForm] = React.useState({
    comicNumber: "",
    randomComic: false,
  });

  const fetchComic = (issue) => {
    fetch(`https://xkcd.now.sh/?comic=${issue}`)
      .then((response) => response.json())
      .then((data) => {
        setComic(data);
        latest.current = data.num;
      });
  };
  useEffect(() => {
    fetchComic("latest");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.comicNumber === "" && form.randomComic === false) {
      fetchComic("latest");
    } else if (form.randomComic === true) {
      const randomComicNum = Math.floor(Math.random() * latest.current) + 1;
      setForm({ ...form, comicNumber: randomComicNum });
      fetchComic(randomComicNum);
    } else {
      fetchComic(form.comicNumber);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>xkcd Comic Lookup</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <label>Comic Number: </label>
        <input
          type="number"
          style={{ width: "225px", marginBottom: "10px" }}
          placeholder="Comic number (blank for latest)"
          disabled={form.randomComic}
          max={latest.current}
          min={1}
          value={form.comicNumber}
          onChange={(e) => setForm({ ...form, comicNumber: e.target.value })}
        />
        <div>
          <label style={{ marginBottom: "10px" }}>Random Comic</label>
          <input
            type="checkbox"
            style={{ marginBottom: "10px" }}
            onChange={(e) =>
              setForm({ ...form, randomComic: e.target.checked })
            }
          />
        </div>
        <button
          type="submit"
          style={{
            marginTop: "10px",
            borderRadius: "5px",
            padding: "5px",
            cursor: "pointer",
          }}
        >
          Get Comic
        </button>
      </form>
      <XkcdResults comic={comic} />
    </div>
  );
}

export default XkcdInfo;
