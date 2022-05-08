export interface FeedbackCreateData {
  type: string
  comment: string
  screenshot?: string
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>
}

// aqui está dizendo qual operação posso usar no banco de dados