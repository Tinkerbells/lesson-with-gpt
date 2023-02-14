import { useState } from "react";
import "./App.css";
import { openaiClient } from "./config/openai";
import Loader from "./components/Loader";
import { generateRequest } from "./utils/generateRequest";

const App = () => {
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSumbit = async (e: React.SyntheticEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const completion = await openaiClient.createCompletion({
        model: "text-davinci-003",
        prompt: generateRequest(),
        max_tokens: 1024,
      });
      if (completion) {
        setIsLoading(false);
      }
      console.log(completion.data.choices[0].text!!);
      setAnswer(completion.data.choices[0].text!!);
    } catch (err) {
      setIsLoading(false);
      console.log("fetch completion", err);
    }
  };
  const res = JSON.stringify(answer) as any;
  console.log(res);
  console.log(res["Week 5"]);
  return (
    <div className="App">
      <form
        className="flex flex-col border-slate-600 border-2 rounded-md p-5"
        onSubmit={(e) => handleSumbit(e)}
      >
        <label htmlFor="request">Type your request</label>
        <button
          className="grid place-items-center bg-gray-700 mt-5"
          type="submit"
        >
          {isLoading ? <Loader /> : "Submit"}{" "}
        </button>
      </form>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://cdn.jackedgorilla.com/wp-content/uploads/2021/11/Best-Upper-Back-Exercises-Face-Pulls.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Back</h2>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
