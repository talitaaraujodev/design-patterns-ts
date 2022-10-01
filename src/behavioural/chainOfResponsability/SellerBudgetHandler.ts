import { BaseBudgetHandler } from './BaseBudgetHandler'
import { CustomerBudget } from './CustomerBudget'

export class SellerBudgetHandler extends BaseBudgetHandler {
  override handle (budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 1000) {
      console.log(' O vendedor tratou o orçamento')
      budget.approved = true
      return budget
    }
    return super.handle(budget)
  }
}
