import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filtredYear, setFilteredYear] = useState('2019')
    const filterChangeFilter = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    return (
        <div>

            <Card className="expenses">
                <ExpenseFilter selected={filtredYear} onChangeFilter={filterChangeFilter} />
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />
            </Card>
        </div>
    );
};

export default Expenses;
