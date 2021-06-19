import React, { Fragment } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

function NewQuote() {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes");
  };
  return (
    <Fragment>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </Fragment>
  );
}

export default NewQuote;
