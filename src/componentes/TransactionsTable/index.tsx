import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, []);


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 650</td>
                        <td>Casa</td>
                        <td>17/02/2022</td>
                    </tr>  
                    <tr>
                        <td>Hamburguer</td>
                        <td className="withdraw">- R$ 50</td>
                        <td>Alimentação</td>
                        <td>14/02/2022</td>
                    </tr>      
                </tbody>

            </table>
        </Container>
    );
}