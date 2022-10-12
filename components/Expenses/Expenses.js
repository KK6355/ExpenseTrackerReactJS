import react, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const saveYearDataHandler = (selectedYear) => {
    console.log(selectedYear);
    setSelectedYear(selectedYear);
  };
  const filterExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            selected={selectedYear}
            onSeletYearData={saveYearDataHandler}
          />
          <ExpensesChart expense={filterExpense} />
          <ExpensesList expense={filterExpense} />
        </Card>
      </li>
    </div>
  );
};
export default Expenses;
