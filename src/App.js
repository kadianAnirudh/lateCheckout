import logo from './logo.svg';
import './App.css';
import backgroundpix from './assets/background.png' 


function App() {

  const records = [
    {
        medal:'🥇',
        rank: 1,
        name: 'Theo',
        Address: '📍 Montreal',
        lc: '1500'
    },
    {
        medal:'🥈',
        rank: 2,
        name: 'Maddie',
        Address: '📍 Los Angeles',
        lc: '1300'
    },
    {
        medal:'🥉',
        rank: 3,
        name: 'Greg',
        Address: '📍 Miami',
        lc: '1100'
    },
    {
        medal:'',
        rank: 4,
        name: 'Gabe',
        Address: '📍 Toronto',
        lc: '900'
    },
    {
        medal:'',
        rank: 5,
        name: 'Rizqi',
        Address: '📍 Indonesia',
        lc: '800'
    }
]

  return (
    <div className="App">
    <div className="parent">
      {/* lEADERBOARD TEXT */}
      <div className="child1">
      <h1  className="leadtext font-extrabold"> LEADERBOARD </h1> 
      </div>

      {/* BUTTONS */}
      <div className="child2">
        <button className="button1"> Add New Peer </button>
        <button className="button2"> Send Funds </button>
      </div>

      {/* TABLE */}
      <div className="p-5 h-screen bg-transparent tableHolder">
        <table classname="w-80">
<thead className="bg-gray-50 border-b-2 border-black">
  <tr>
    <th className="p-3 text-sm font-semibold tracking-wide text-left">  </th>
    <th className="p-3 text-sm font-semibold tracking-wide text-left"> Rank </th>
    <th className="p-3 text-sm font-semibold tracking-wide text-left"> Name </th>
    <th className="p-3 text-sm font-semibold tracking-wide text-left address1"> Address </th>
    <th className="p-3 text-sm font-semibold tracking-wide text-left"> $LC </th>
  </tr>
</thead>

<tbody>
{records.map(record => (
  <tr classname="bg-white">
    <td className="p-3 text-sm text-gray-700"> {record.medal} </td>
    <td className="p-3 text-sm text-gray-700 font-bold"> {record.rank} </td>
    <td className="p-3 text-sm text-gray-700 font-bold"> {record.name} </td>
    <td className="p-3 text-sm text-gray-700 font-bold address2"> {record.Address} </td>
    <td className="p-3 text-sm text-gray-700 font-bold"> {record.lc} </td>
  </tr>
))}
</tbody>
        </table>
      </div>
      </div>  
    </div>
  );
}

export default App;
