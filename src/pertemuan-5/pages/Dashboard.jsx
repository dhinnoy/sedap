import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import CardCount from "../components/CardCount";
import Data from "../json/data.json";

export default function Dashboard() {
    const breadcrumb = ['Home', '/', 'Home Detail', '/','Home Very Detail']
    return (
        <div id="dashboard-container">
            
            <PageHeader
                title = 'Dashboard'
                breadscrumb = {breadcrumb}
                children={<Button name = 'Add Button' to="/1"/>}
            /> 

            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {Data.map((item, index) => (
                    <div key={item.id}>
                        <CardCount
                            icon={item.icon}
                            jumlah={item.count}
                            name={item.title}
                            color={item.bgcolor}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}