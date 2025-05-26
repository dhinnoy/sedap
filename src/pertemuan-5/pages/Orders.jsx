import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import Data from "../json/orders.json";
import Table from './../components/Table';

export default function Orders() {
    const breadcrumb = ['Home', '/', 'Home Detail', '/', 'Home Very Detail'];
    
    return (
        <div>
            <PageHeader
                title="Orders"
                breadscrumb={breadcrumb}
                children={<Button name="Add Orders" />}
            />

            <Table
                head={["id", "customer_id", "status", "total_price", "order_date"]}
                data={Data}
            />
        </div>
    );
}
