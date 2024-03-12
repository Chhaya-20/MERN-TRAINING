class BankAccount {
    constructor(accountNo, accountHolder, balance = 0) {
        this._accountNo = accountNo;
        this._accountHolder = accountHolder;
        this._balance = balance;
    }

    //DEPOSIT MONEY TO USER ACCOUNT

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited ${amount} into account ${this._accountNo}.\n`);
        } else {
            console.log("Invalid deposit amount.\n");
        }
    }

    //WITHDRAW MONEY FROM USER ACCOUNT

    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrew ${amount} from account ${this._accountNo}.\n`);
        } else {
            console.log("Insufficient funds for withdrawal.\n");
        }
    }

    //DISPLAY USER BALANCE

    displayBalance() {
        console.log(`Account No.: ${this._accountNo}`);
        console.log(`Account Holder: ${this._accountHolder}`);
        console.log(`Balance: ${this._balance}\n`);
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNo, accountHolder, interestRate, balance = 0) {
        super(accountNo, accountHolder, balance);
        this._interestRate = interestRate;
    }

    //ADD INTEREST
    addInterest() {
        const interestAmount = this._balance * (this._interestRate / 100);
        this.deposit(interestAmount);
        console.log(`Interest added: ${interestAmount}\n`);
    }

    //WITHDRAW AMOUNT WITH PENALITY
    withdraw(amount) {
        const penaltyFee = 10;
        if (amount > this._balance) {
            console.log("Insufficient funds for withdrawal.\n");
            return;
        }
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount;
            console.log(`Withdrew ${amount} from account ${this._accountNo}.\n`);

            //PENALITY AMOUNT IS 1000
            if (amount > 1000) {
                console.log(`Penalty fee : ${penaltyFee}\n`);
                this._balance -= penaltyFee;
            }
        }
    }
}


//CREATING OBJECT OF BANK ACCOUNT CLASS
const account1 = new BankAccount("123456", "John Doe", 1000);
//DISPLAY BALANCE
account1.displayBalance();

//DEPOSIT CASH 
account1.deposit(500);
account1.displayBalance();


//WITHDRAW MONEY
account1.withdraw(200);
account1.displayBalance();


//CREATING OBJECT OF SAVING ACCOUNT CLASS
const savingsAccount = new SavingsAccount("789012", "Jane Smith", 5, 2000);
//DISPLAY BALANCE
savingsAccount.displayBalance();

//ADD INTEREST
savingsAccount.addInterest();
savingsAccount.displayBalance();

//WITHDRAW MONEY
savingsAccount.withdraw(1500); 
savingsAccount.displayBalance();

//DEPOSIT MONEY
savingsAccount.deposit(2000); 
savingsAccount.displayBalance();
