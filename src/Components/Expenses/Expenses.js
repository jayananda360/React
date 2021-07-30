import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
    const [filteredYear, setFilterYear] = useState('2021')

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expenseContent = <p className='expense-message'>No Item Available!</p>;

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />

                {expenseContent}
                {/* {filteredExpenses.length === 0 ? (<p>No Item Available</p>)
                    : (filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                    )} */}

            </Card>
        </div >
    );
}

export default Expenses;