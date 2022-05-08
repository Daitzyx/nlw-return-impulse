import express from 'express';
import { NodemailMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';

import { PrismaFeebacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()



routes.post('/feedbacks', async (req, res) => {
  const {type, comment, screenshot} = req.body

  const prismaFeebacksRepository = new PrismaFeebacksRepository()
const nodemailerMailAdapter = new NodemailMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeebacksRepository,
    nodemailerMailAdapter
  ) 

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  })
  


  return res.status(201).json()
})