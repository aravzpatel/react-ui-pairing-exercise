import { useEffect, useState } from "react";
import loanApplicationsData from './loanApplicationsData.json'

const App = () => {
  const [loanApplications, setLoanApplications] = useState()
  useEffect(() => {
    setLoanApplications(loanApplicationsData.data)
  }, [])

  return (
    <div className="App">
      <table>
        <tr>
          <th>Client Details</th>
          <th>Loan Amount</th>
        </tr>
          {loanApplications?.map(item => { 
            return (
              <tr>
              <td>{item.clientName}</td>
              <td>{item.loanAmount}</td>
              </tr>
            ) })}
      </table>
    </div>
  );
};

export default App;
