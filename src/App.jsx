import { useEffect, useState } from "react";
import loanApplicationsData from './loanApplicationsData.json'

const App = () => {
  const [loanApplications, setLoanApplications] = useState()
  useEffect(() => {
    setLoanApplications(loanApplicationsData.data)
  }, [])

const formatter = new Intl.NumberFormat('en-gb', {
  style: 'currency',
  currency: 'GBP',
});

  return (
    <div className="App">
      <table>
        <tr>
          <th>Client Details</th>
          <th>Loan Amount</th>
          <th>Status</th>
        </tr>
          {loanApplications?.map((item, idx) => { 
            return (
              <tr>
              <td>{item.clientName}</td>
              <td>{formatter.format(item.loanAmount)}</td>
              <td data-testid={`loan-status-${idx}`}>{item.submittedAt ? 'Submitted': 'Incomplete'}</td>
              </tr>
            ) })}
      </table>
    </div>
  );
};

export default App;
