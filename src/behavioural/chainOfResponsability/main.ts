import { CustomerBudget } from './CustomerBudget'
import { SellerBudgetHandler } from './SellerBudgetHandler'
import { ManagerBudgetHandler } from './ManagerBudgetHandler'
import { DirectorBudgetHandler } from './DirectorBudgetHandler'
import { CEOBudgetHandler } from './CeoBudgetHandler'

const customerBudget = new CustomerBudget(1001)

const seller = new SellerBudgetHandler()
seller
  .setNextHandler(new ManagerBudgetHandler())
  .setNextHandler(new DirectorBudgetHandler())
  .setNextHandler(new CEOBudgetHandler())

seller.handle(customerBudget)
console.log(customerBudget)
