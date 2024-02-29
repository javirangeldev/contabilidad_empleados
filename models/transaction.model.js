class Transaction {
    constructor(employeeId, date, type, amount) {
        this.employeeId = employeeId;
        this.date = date;
        this.type = type;
        this.amount = amount;
    }
}

module.exports = Transaction;
