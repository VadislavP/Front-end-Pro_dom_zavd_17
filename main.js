class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Ваш баланс ${amount} гривень. Новий баланс: ${this.balance} гривень`);
        } else {
            console.log('Недійсна сума депозиту. Будь ласка, внесіть позитивну суму.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Знято ${amount} гривень. Новий баланс: ${this.balance} гривень`);
        } else if (amount > this.balance) {
            console.log('Недостатньо коштів. Не можна зняти.');
        } else {
            console.log('Недійсна сума зняття. Будь ласка, зніміть позитивну суму.');
        }
    }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance()); // 1000

account1.deposit(500);
console.log(account1.getBalance()); // 1500

account1.withdraw(200);
console.log(account1.getBalance()); // 1300
