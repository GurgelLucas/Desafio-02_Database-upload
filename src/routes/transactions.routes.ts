import { Router } from 'express';

// import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
// import DeleteTransactionService from '../services/DeleteTransactionService';
// import ImportTransactionsService from '../services/ImportTransactionsService';

const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
  // TODO
  //const transactions = .all()
  return response.status(200);
});

transactionsRouter.post('/', async (request, response) => {
  // TODO
  const { title, value, type, category } = request.body;
  const createTransaction = new CreateTransactionService();
  const transaction = await createTransaction.execute({ title, value, type, category });
  return response.status(200).json(transaction);
});

transactionsRouter.delete('/:id', async (request, response) => {
  // TODO
  return response.status(200);
});

transactionsRouter.post('/import', async (request, response) => {
  // TODO
  return response.status(200);
});

export default transactionsRouter;
