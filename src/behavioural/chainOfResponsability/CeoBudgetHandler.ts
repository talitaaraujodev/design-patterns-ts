import { BaseBudgetHandler } from './BaseBudgetHandler'
import { CustomerBudget } from './CustomerBudget'

export class CEOBudgetHandler extends BaseBudgetHandler {
  override handle (budget: CustomerBudget): CustomerBudget {
    console.log(' O ceo trata qualquer orçamento o orçamento')
    budget.approved = true
    return budget
  }
}
