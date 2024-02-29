class TransactionDetail {
    constructor(transactionId, categoryId, description, amount) {
        this.transactionId = transactionId;
        this.categoryId = categoryId;
        this.description = description;
        this.amount = amount;
    }
}

module.exports = TransactionDetail;
