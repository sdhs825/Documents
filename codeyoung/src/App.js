import "./App.css";
import { LangSelect } from "./comps/lang_select";
import { TextPad } from "./comps/text";
import { useState, useEffect } from "react";
const axios = require("axios").default;

function App() {
  var [option, setOption] = useState([]);
  var [to, setTo] = useState("");
  var [from, setFrom] = useState("");
  var [input, setInput] = useState("");
  var [output, setOutput] = useState("");

  const translate = () => {
    const params = new URLSearchParams();
    params.append("q", input);
    params.append("source", from);
    params.append("target", to);
    params.append("format", "text");
    params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    axios.post("https://libretranslate.com/translate",params, {
      headers: { accept: "application/json" },
    }).then(res => {
      console.log(res);
      setOutput(res.data.translatedText);
    }).catch(error => {
      console.log(error)
    });
  };

  // curl -X GET "https://libretranslate.com/languages" -H  "accept: application/json"
  useEffect(() => {
    axios
      .get("https://libretranslate.com/languages", {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        
        setOption(res.data);
      });
  }, []);

  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <LangSelect type="From" options={option} val={from} set={setFrom} />
        <LangSelect
          options={option}
          type="To"
          style={{ float: "right", borderColor: "black" }}
          set={setTo}
          val={to}
        />
      </div>
      <div className="container">
        <TextPad label="From" set={setInput} />
        <TextPad label="To" val={output} />
        <div className="text-center">
          <button type="button" className="btn btn-primary btn-lg" onClick={translate}>
            Translate
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
