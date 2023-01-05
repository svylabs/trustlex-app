import React from 'react';

type Props = {};

const SwapPage = (props: Props) => {
  return (
    <div>Swap Page <br/>
        1. I want to swap ____ bitcoin for ______ Ethereum [Go] or  <br/>
        2. I want to swap ____ ethereum for ______ Bitcoin [Go] <br/><br/>

        Depending on above selection should show instructions on what to do next. <br/> <br/>

        For Bitcoin to Ethereum swap, we should do the following: <br/>
        Show a list of limit orders, for each order a button called "Take". This should display details for the order <br/> <br/>

        For Ethereum to Bitcoin swap, we should do the following: <br/>
        Show a form where user will input additional information like Bitcoin address where to receive the Bitcoin. <br/>
    </div>
  );
};

export default SwapPage;