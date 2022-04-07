// lib
import React, { useState } from 'react';
import api from '../../services/api';

// services

// utils

// hooks

// icons

// components

// interfaces

const Employees: React.FC = () => {

    // constants
    const getEmployees = async () => {
        const {data} = await api.post('/funcionarios', {"cargo": role})
        console.log(data)
        const list = data["response"]
        setArrayEmployees(list)
    }

    const [role, setRole] = useState("");
    const [arrayEmployees, setArrayEmployees] = useState([]);
    
    const handleCreateList = (employeesList: any) => {
        return employeesList.map((item: { [x: string]: string; }) => {
            return <p>{'Nome: ' + item["Nome"] + ' / Salário: ' + item["Salário"]}</p>
        });
    }

    return (
        <div>
            <h1>Funcionários</h1>
            <input onChange={(role) => setRole(role.target.value)}/>
            <button onClick={getEmployees}>pesquisar</button>
            {handleCreateList(arrayEmployees)}
        </div>
    );
};

export default Employees;