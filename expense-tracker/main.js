// Global array to store all transactions
let transactions = [];

// Add Income Function
function addIncome() {
  const description = document
    .getElementById("income-description")
    .value.trim();
  const amount = parseFloat(document.getElementById("income-amount").value);

  // Validation
  if (description === "") {
    alert("❌ Please enter an income description.");
    document.getElementById("income-description").focus();
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert("❌ Please enter a valid amount greater than 0.");
    document.getElementById("income-amount").focus();
    return;
  }

  // Create transaction object
  const transaction = {
    id: Date.now() + Math.random(), // More unique ID
    description: description,
    category: "Income",
    amount: amount,
    type: "Income",
    date: new Date().toLocaleDateString(),
  };

  // Add to transactions array
  transactions.push(transaction);

  // Update UI
  updateTransactionTable();
  updateSummary();
  clearIncomeInputs();

  // Success feedback
  showMessage("✅ Income added successfully!", "success");
}

// Add Expense Function
function addExpense() {
  const description = document
    .getElementById("expense-description")
    .value.trim();
  const category = document.getElementById("expense-category").value;
  const amount = parseFloat(document.getElementById("expense-amount").value);

  // Validation
  if (description === "") {
    alert("❌ Please enter an expense description.");
    document.getElementById("expense-description").focus();
    return;
  }

  if (isNaN(amount) || amount <= 0) {
    alert("❌ Please enter a valid amount greater than 0.");
    document.getElementById("expense-amount").focus();
    return;
  }

  // Create transaction object
  const transaction = {
    id: Date.now() + Math.random(), // More unique ID
    description: description,
    category: category,
    amount: amount,
    type: "Expense",
    date: new Date().toLocaleDateString(),
  };

  // Add to transactions array
  transactions.push(transaction);

  // Update UI
  updateTransactionTable();
  updateSummary();
  clearExpenseInputs();

  // Success feedback
  showMessage("✅ Expense added successfully!", "success");
}

// Update Transaction Table
function updateTransactionTable() {
  const tbody = document.getElementById("transaction-history");

  if (transactions.length === 0) {
    tbody.innerHTML = `
            <tr class="empty-state">
              <td colspan="5">No transactions yet. Add your first income or expense!</td>
            </tr>
          `;
    return;
  }

  tbody.innerHTML = "";

  // Sort transactions by ID (newest first)
  const sortedTransactions = [...transactions].reverse();

  sortedTransactions.forEach((transaction) => {
    const row = document.createElement("tr");
    const typeClass =
      transaction.type === "Income" ? "income-type" : "expense-type";

    row.innerHTML = `
            <td title="${transaction.description}">${
      transaction.description
    }</td>
            <td>${transaction.category}</td>
            <td>₦${transaction.amount.toLocaleString("en-NG", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}</td>
            <td class="${typeClass}">${transaction.type}</td>
            <td><button onclick="deleteTransaction(${
              transaction.id
            })" title="Delete this transaction">🗑️ Delete</button></td>
          `;
    tbody.appendChild(row);
  });
}

// Delete Transaction Function
function deleteTransaction(id) {
  if (confirm("⚠️ Are you sure you want to delete this transaction?")) {
    const initialLength = transactions.length;
    transactions = transactions.filter((transaction) => transaction.id !== id);

    if (transactions.length < initialLength) {
      updateTransactionTable();
      updateSummary();
      showMessage("✅ Transaction deleted successfully!", "success");
    } else {
      showMessage("❌ Error deleting transaction.", "error");
    }
  }
}

// Update Summary
function updateSummary() {
  let totalIncome = 0;
  let totalExpenses = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "Income") {
      totalIncome += transaction.amount;
    } else if (transaction.type === "Expense") {
      totalExpenses += transaction.amount;
    }
  });

  const balance = totalIncome - totalExpenses;

  // Update display with proper formatting
  document.getElementById("total-income").textContent =
    totalIncome.toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  document.getElementById("total-expenses").textContent =
    totalExpenses.toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  document.getElementById("balance").textContent = balance.toLocaleString(
    "en-NG",
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
  );

  // Change balance color based on positive/negative
  const balanceElement = document.getElementById("balance");
  balanceElement.className = balance >= 0 ? "positive" : "negative";
}

// Clear Input Functions
function clearIncomeInputs() {
  document.getElementById("income-description").value = "";
  document.getElementById("income-amount").value = "";
}

function clearExpenseInputs() {
  document.getElementById("expense-description").value = "";
  document.getElementById("expense-amount").value = "";
  document.getElementById("expense-category").selectedIndex = 0;
}

// Clear All Data
function clearAll() {
  if (
    confirm(
      "⚠️ Are you sure you want to clear ALL transactions? This action cannot be undone!"
    )
  ) {
    transactions = [];
    updateTransactionTable();
    updateSummary();
    clearIncomeInputs();
    clearExpenseInputs();
    showMessage("✅ All data cleared successfully!", "success");
  }
}

// Show Message Function
function showMessage(message, type) {
  // Simple alert for now - you could create a more sophisticated notification system
  setTimeout(() => {
    if (type === "success") {
      console.log(message);
    } else {
      console.error(message);
    }
  }, 100);
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("💰 Budget Planner initialized successfully!");

  // Add Enter key support for better UX
  document
    .getElementById("income-description")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        document.getElementById("income-amount").focus();
      }
    });

  document
    .getElementById("income-amount")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addIncome();
      }
    });

  document
    .getElementById("expense-description")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        document.getElementById("expense-category").focus();
      }
    });

  document
    .getElementById("expense-amount")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        addExpense();
      }
    });

  // Initialize empty state
  updateTransactionTable();
  updateSummary();
});
