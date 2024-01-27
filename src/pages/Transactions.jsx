import React, { useState, useEffect } from 'react';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost:9494/api/event/';

        const fetchTransactions = async () => {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setTransactions(data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="transactions-container">
            <h2>Transactions</h2>
            <div className="table-container">
                <table className="modern-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.id}</td>
                                <td>{transaction.name}</td>
                                <td>{transaction.username}</td>
                                <td>{transaction.emailAddress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;
