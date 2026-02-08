interface baseResponse {
  statusCode: number,
  message: string
}

export interface createCountRequestType {
  code: string
}

export interface createCountResponseType extends baseResponse {
  data: {
    code: string,
    date: number
  }
}

export interface detailCountRequestType {
  code: string
}

export interface detailCountResponseType extends baseResponse {
  data: {
    code: string,
    date: number
  }
}

export interface deleteCountRequestType {
  code: string
}

export interface deleteCountResponseType extends baseResponse {
  data: {
    code: string
  }
}