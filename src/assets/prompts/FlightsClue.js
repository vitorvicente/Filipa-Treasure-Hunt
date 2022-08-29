import React from "react";

import { Button, Container, Table } from "react-bootstrap";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


export const FlightsClueTextOne = ({ changeLocalConfig, accountId }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh" } }>
    <h1>Agent 1010,</h1>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      Q has gone through all the documents you obtained during your last raid. Sad to say, he confirmed your prior
      discovery, it seems that you are the target. Yet not all is bad, Q has also been able to find another piece of
      information that might be useful, one of the folders includes references to a bank account with the Bank of
      England, with account ID <strong>{ accountId }</strong>.
    </h3>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      We believe this account has been used to arrange transportation for the enemy Operative and their team. However,
      we have, so far, been unable to hack our way into the account. So we leave this task to you.
    </h3>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      After accessing the account you should look for any suspicious activity that might point to any travel
      arrangements made.
    </h3>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Button variant="danger"
            onClick={ () => changeLocalConfig("localStage", "decrypt") }>
      <h3>Hack Account</h3>
    </Button>
  </Container>

  <Footer />
</> );

export const FlightsClueTextTwo = ({ changeLocalConfig, accountId }) => ( <>
  <Container style={ { minHeight: "50vh", textAlign: "left", } }>
    <h2 style={ { fontWeight: "bold", paddingBottom: "2%" } }>Account { accountId }</h2>
    <h3 style={ { fontStyle: "italic" } }>Transactions</h3>
    <Table>
      <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th> </th>
        <th>Value ($)</th>
        <th>Balance ($)</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th> 2022-07-19</th>
        <th colSpan={ 2 }> Q**** *******: QR **</th>
        <th> -2685</th>
        <th> 991475</th>
      </tr>
      <tr>
        <th> 2022-07-07</th>
        <th colSpan={ 2 }> S**** National ****: A10314</th>
        <th> 4310</th>
        <th> 994160</th>
      </tr>
      <tr>
        <th> 2022-07-03</th>
        <th colSpan={ 2 }> **********</th>
        <th> 9199</th>
        <th> 989850</th>
      </tr>
      <tr>
        <th> 2022-06-26</th>
        <th colSpan={ 2 }> Click & **at</th>
        <th> -9299</th>
        <th> 980651</th>
      </tr>
      <tr>
        <th> 2022-05-28</th>
        <th colSpan={ 2 }> ATM</th>
        <th> -1789</th>
        <th> 989950</th>
      </tr>
      <tr>
        <th> 2022-05-02</th>
        <th colSpan={ 2 }> Q**** *******: QR 2</th>
        <th> -1476</th>
        <th> 991739</th>
      </tr>
      <tr>
        <th> 2022-04-21</th>
        <th colSpan={ 2 }> Paypal: R281209</th>
        <th> 1332</th>
        <th> 993215</th>
      </tr>
      <tr>
        <th> 2022-04-08</th>
        <th colSpan={ 2 }> BoC: Y381941</th>
        <th> 4381</th>
        <th> 991883</th>
      </tr>
      <tr>
        <th> 2022-03-31</th>
        <th colSpan={ 2 }> Dividends</th>
        <th> 834</th>
        <th> 987502</th>
      </tr>
      <tr>
        <th> 2022-03-20</th>
        <th colSpan={ 2 }> BDS: U3123628</th>
        <th> 4267</th>
        <th> 986668</th>
      </tr>
      <tr>
        <th> 2022-02-16</th>
        <th colSpan={ 2 }> Atlas Hel********</th>
        <th> -7780</th>
        <th> 982401</th>
      </tr>
      <tr>
        <th> 2022-02-09</th>
        <th colSpan={ 2 }> **********</th>
        <th> -3738</th>
        <th> 990181</th>
      </tr>
      <tr>
        <th> 2022-01-07</th>
        <th colSpan={ 2 }> Europ*** UK</th>
        <th> -4176</th>
        <th> 993919</th>
      </tr>
      <tr>
        <th> 2022-01-02</th>
        <th colSpan={ 2 }> Swiss Credit: X892146</th>
        <th> 9521</th>
        <th> 998095</th>
      </tr>
      <tr>
        <th> 2021-12-21</th>
        <th colSpan={ 2 }> Amazon.com Inc.</th>
        <th> -4266</th>
        <th> 988574</th>
      </tr>
      <tr>
        <th> 2021-11-23</th>
        <th colSpan={ 2 }> Blacks Cantebury</th>
        <th> -6413</th>
        <th> 992840</th>
      </tr>
      <tr>
        <th> 2021-11-15</th>
        <th colSpan={ 2 }> B**: 1241234052</th>
        <th> 2782</th>
        <th> 999253</th>
      </tr>
      <tr>
        <th> 2021-09-30</th>
        <th colSpan={ 2 }> **********</th>
        <th> 1312</th>
        <th> 996471</th>
      </tr>
      <tr>
        <th> 2021-09-20</th>
        <th colSpan={ 2 }> Canterbury Mot***** Wo***</th>
        <th> -5063</th>
        <th> 995159</th>
      </tr>
      <tr>
        <th> 2021-08-26</th>
        <th colSpan={ 2 }> Dividends</th>
        <th> 222</th>
        <th> 1000222</th>
      </tr>
      </tbody>
    </Table>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Button variant="danger"
            onClick={ () => changeLocalConfig("localEncryptStage", "four") }>
      <h3>Transmit Information</h3>
    </Button>
  </Container>

  <Container>
    <p><em><strong>HINT:</strong> Read the Entries carefully, you may use Google to your advantage.</em></p>
  </Container>
  <Container>
    <p>
      <em>
        <strong>Legal Waiver:</strong> All but two of the entries on this table are false and
                                       have no connection to real life. The same applies to <strong>all</strong> values
                                       and balances.
      </em>
    </p>
  </Container>
</> );

export const FlightsClueTextThree = ({ changeStage }) => ( <>
  <Header />

  <Container style={ { minHeight: "50vh" } }>
    <h1>Agent 1010,</h1>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      The Secretary has received your transmission, it is clear that the foe intends to use Qatar Airways as their
      choice of carrier, yet both Q and the other intelligence specialists doubt that Qatar is their true final
      destination, as the country has too many connections with the West.
    </h3>
    <h3 style={ { textIndent: "10%", paddingTop: "5%" } }>
      Qatar Airways flies to over 160 destinations as of August 2022, Q and his team are hard at work trying to figure
      out which of these is the actual location of the blacksite. With that said, the Secretary Leadership believes you
      should re-focus your efforts into determining who the enemy Operative is.
    </h3>
  </Container>

  <Container style={ { paddingTop: "5%", paddingBottom: "5%", textAlign: "center" } }>
    <Button variant="danger"
            onClick={ () => changeStage("four") }>
      <h3>Continue...</h3>
    </Button>
  </Container>

  <Footer />
</> );