import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                { getUsers().map((item) => {
                    return(
                        <div>
                            <p>Nome: {item.name}</p>
                            <p>Email: {item.email}</p>
                            <p>Password: {item.password}</p>
                            <p>Token: {item.token}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};