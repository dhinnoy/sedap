import Button from "../components/Button";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table";
import Data from "../json/customer.json";

export default function Customers(){
    const a = ['Ini', 'halaman', 'Customers']
    return (
        <div>
            <PageHeader
            title = "Customers"
            breadscrumb = {a}
            children = {<Button name="Add Customer" to="/formcust"/>}
            />

            <Table
                head={["id", "name", "email", "phone", "loyalty"]}
                data={Data}
            />
        </div>
    )
}