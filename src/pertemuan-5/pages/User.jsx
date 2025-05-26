import { useEffect, useState } from "react"
import Button from "../components/Button"
import PageHeader from "../components/PageHeader"
import Table from "../components/Table";

export default function User(){
    
    const breadcrumb = ['User', '/', 'User Detail']
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data.users)) // karena data.users isinya array user
            .catch((error) => console.error("Error fetching users:", error));
    }, []); // empty dependency array artinya hanya jalan sekali saat component mount


    return (
        <div>
            <PageHeader
                        title = "User"
                        breadscrumb = {breadcrumb}
                        children = {<Button name="Add Button" to="/dashboard"/>}
                        />
            
            <Table
            head={["id", "firstName", "lastName", "gender", "email", "phone"]}
            data={users}
            />
        </div>
    )
}