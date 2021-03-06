import Footer from "componets/Footer";
import NavBar from "componets/NavBar";
import DataTable from "componets/DataTable";
import BarChart from "componets/BarChart";
import DonutChart from "componets/DonutChart";
function App() {
  return (
    <>
    <NavBar />
    <div className="container">

      <h1 className="text-primary py-3">Dashboard de Vendas.</h1>

      <div className="row px-3">

      <div className="col-sm-6">
        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
        <BarChart/>
        </div>
        <div className="col-sm-6">
        <h5>Todas Vendas</h5>
        <DonutChart/>
        </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas as vendas</h2>
        </div>


      <DataTable/>

      
    </div>
    <Footer/>
    </>
   
  );
}

export default App;
