import React from 'react';
import '../App.css';
const CustomerList = ({ customers, onSelect, selectedCustomer }) => {
    return (
        <div className="boxed">
            <h2>Customers List</h2>
            <table className="customer-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Pass</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr 
                            key={customer.id} 
                            onClick={() => onSelect(customer)}
                            className={selectedCustomer && selectedCustomer.id === customer.id ? 'selected' : ''}
                        >
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerList;