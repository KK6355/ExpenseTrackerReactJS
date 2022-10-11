import react, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const saveYearDataHandler = (selectedYear) => {
    console.log(selectedYear);
    setSelectedYear(selectedYear);
  };
  const filterExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });
  let expensesContent = <p>No expenses found.</p>;
  if (filterExpense.length > 0) {
    expensesContent = filterExpense.map((expense) => (
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
        <ExpensesFilter
          selected={selectedYear}
          onSeletYearData={saveYearDataHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};
export default Expenses;
