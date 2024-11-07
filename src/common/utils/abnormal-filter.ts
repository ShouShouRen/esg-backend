import type { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Catch, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class AbnormalFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();
    const message = (exception.getResponse() as any).message;
    response.status(status).json({
      code: status,
      data: null,
      message,
    });
  }
}
