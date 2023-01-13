import {useEffect, useState} from "react";
import loanApplicationsData from './loanApplicationsData.json'

const App = () => {
  const [loanApplications, setLoanApplications] = useState()
  useEffect(() => {
    setLoanApplications(loanApplicationsData.data)
  }, [])

  return (
    <div className="App">
        {loanApplications &&
        <table>
          <tr>
            <th>
              Client Details
            </th>
            <th>
              Address
            </th>
            <th>
              Type
            </th>
            <th>
              All in rate
            </th>
            <th>
              Loan amount
            </th>
            <th>
              Created at
            </th>
            <th>
              Status
            </th>
          </tr>
          {loanApplications.map((item) => {
            return (
              <tr data-testid={`${item.clientName} row`}>
              <td>
                {item.clientName}
              </td>
              <td>
                {item.propertyAddress}
              </td>
              <td>
                {item.loanType}
              </td>
              <td>
                {Number(item.allInRate).toLocaleString('en-GB',{style: 'percent', maximumFractionDigits:1})}
              </td>
              <td>
                {new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 0}).format(item.loanAmount)}
              </td>
              <td>
                {item.createdAt.slice(0,10)}
              </td>
              <td>
                {item.submittedAt ? 'Submitted' : 'Incomplete'}
              </td>
            </tr>
            )
          })}
        </table>}
    </div>
  );
};

export default App;
