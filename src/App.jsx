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
          <tr>
            <td>
              {loanApplications[0].clientName}
            </td>
            <td>
              {loanApplications[0].propertyAddress}
            </td>
            <td>
              {loanApplications[0].loanType}
            </td>
            <td>
              {Number(loanApplications[0].allInRate).toLocaleString('en-GB',{style: 'percent', maximumFractionDigits:1})}
            </td>
            <td>
              {new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 0}).format(loanApplications[0].loanAmount)}
            </td>
            <td>
              {loanApplications[0].createdAt.slice(0,10)}
            </td>
            <td>
              {loanApplications[0].submittedAt ? 'Submitted' : 'Incomplete'}
            </td>
          </tr>
          <tr>
            <td>
              {loanApplications[1].clientName}
            </td>
            <td>
              {loanApplications[1].propertyAddress}
            </td>
            <td>
              {loanApplications[1].loanType}
            </td>
            <td>
              {Number(loanApplications[1].allInRate).toLocaleString('en-GB',{style: 'percent', maximumFractionDigits:1})}

            </td>
            <td>
              {new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 0}).format(loanApplications[1].loanAmount)}
            </td>
            <td>
              {loanApplications[1].createdAt.slice(0,10)}
            </td>
            <td>
              {loanApplications[1].submittedAt ? 'Submitted' : 'Incomplete'}
            </td>
          </tr>
          <tr>
            <td>
              {loanApplications[2].clientName}
            </td>
            <td>
              {loanApplications[2].propertyAddress}
            </td>
            <td>
              {loanApplications[2].loanType}
            </td>
            <td>
              {Number(loanApplications[2].allInRate).toLocaleString('en-GB',{style: 'percent', maximumFractionDigits:1})}

            </td>
            <td>
              {new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 0}).format(loanApplications[2].loanAmount)}
            </td>
            <td>
              {loanApplications[2].createdAt.slice(0,10)}

            </td>
            <td>
              {loanApplications[2].submittedAt ? 'Submitted' : 'Incomplete'}
            </td>
          </tr>
          <tr>
            <td>
              {loanApplications[3].clientName}
            </td>
            <td>
              {loanApplications[3].propertyAddress}
            </td>
            <td>
              {loanApplications[3].loanType}
            </td>
            <td>
              {Number(loanApplications[3].allInRate).toLocaleString('en-GB',{style: 'percent', maximumFractionDigits:1})}

            </td>
            <td>
              {new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP', maximumFractionDigits: 0}).format(loanApplications[3].loanAmount)}
            </td>
            <td>
              {loanApplications[3].createdAt.slice(0,10)}
            </td>
            <td>
              {loanApplications[3].submittedAt ? 'Submitted' : 'Incomplete'}
            </td>
          </tr>
        </table>}
    </div>
  );
};

export default App;
