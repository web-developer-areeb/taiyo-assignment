import { useSelector } from "react-redux";
import useThunk from "../hooks/useThunk";
import { fetchCovidCases } from "../store";
import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Covid Cases",
    },
  },
};

function ChartAndMap() {
  const [doFetchCovidCases, isLoadingCovidCases, loadingCovidCasesError] =
    useThunk(fetchCovidCases);

  const { data } = useSelector((state) => {
    return state.covidCases;
  });

  useEffect(() => {
    doFetchCovidCases();
  }, [doFetchCovidCases]);
  
  if(isLoadingCovidCases) {
    return <>Loading...</>
  };

  if(loadingCovidCasesError) {
    return <p>Opps looks like an error occured.</p>
  };


  const labels = Object.keys(data.cases);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Cases",
        data: Object.values(data.cases),
        borderColor: "rgb(255, 153, 51)",
        backgroundColor: "rgb(255, 153, 51)",
        borderWidth: 1
      },
      {
        label: 'Death',
        data: Object.values(data.deaths),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(53, 162, 235)',
      },
      {
        label: 'Recovered',
        data: Object.values(data.recovered),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  return (
    <div>
      <div className="w-2/3 ml-8">
        <Line options={options} data={chartData} />
      </div>
      <h2 className="w-2/3 flex justify-center mt-8">Covid Cases Chart</h2>
    </div>
  )
}

export default ChartAndMap;

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export function App() {
//   return <Line options={options} data={data} />;
// }
