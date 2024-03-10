import { useState } from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Service from "../Service/Service";
import List from "../List/List";
import DisplayOutput from "../DisplayOutput/DisplayOutput";
import Footer from "../Footer/Footer";

const Calculator = () => {
  const [amount, setAmount] = useState();
  const [tip, setTip] = useState("");
  const [text, setText] = useState("");
  const [cusList, setCusList] = useState([]);
  const [output, setOutput] = useState("");
  const [ttip, setTtip] = useState([]);
  const [finalTip, setFinalTip] = useState([]);

  const calculateTip = (amount, tip) => {
    /*switch (tip) {
      case "excellent":
        return amount * 0.2;
        break;
      case "medium":
        return amount * 0.1;
        break;
      case "notGood":
        return amount * 0.05;
        break;
      default:
        return 0;
    }*/
    let tipAmount = 0;
    if (tip === "excellent") {
      tipAmount = amount * 0.2;
    } else if (tip === "medium") {
      tipAmount = amount * 0.1;
    } else if (tip === "notGood") {
      tipAmount = amount * 0.05;
    }
    return tipAmount;
  };

  const tipAmount = calculateTip(amount, tip);

  const btnClickHandler = () => {
    const trimText = text.trim();
    if (trimText == "") {
      alert("Enter valid name");
    } else {
      setCusList([...cusList, `${text} offering a tip of ${tipAmount} Rs`]);
      setTtip([...ttip, tipAmount]);
      setAmount("");
      setTip("");
      setText("");
    }
  };

  const clearCustomerHandler = () => {
    setCusList([]);
    setTtip([]);
  };

  const addTip = ttip.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const calculateBtnHandler = () => {
    const listItem = cusList.map((task, index) => <li key={index}>{task}</li>);
    let customers = listItem.length;
    setOutput(customers);
    setFinalTip(addTip);
  };

  //const changeHandler = (e) => setAmount(e.target.value);
  const changeHandler = (e) => {
    setAmount(e.target.value);
  };

  const changeHandler1 = (e) => setTip(e.target.value);

  const changeHandler2 = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <Header />
      <Input value={amount} changeHandler={changeHandler} />
      <Service
        value1={tip}
        changeHandler1={changeHandler1}
        value={text}
        changeHandler2={changeHandler2}
        btnClickHandler={btnClickHandler}
        clearCustomerHandler={clearCustomerHandler}
        isDisabled={!amount || !tip || !text}
      />
      <List list={cusList} calculateBtnHandler={calculateBtnHandler} />
      <DisplayOutput output={output} ttip={finalTip} />
      <Footer />
    </>
  );
};

export default Calculator;
