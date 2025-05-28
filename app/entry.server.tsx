import type { EntryContext } from '@remix-run/node';
// import pkg from '@remix-run/node';
// const { Response } = pkg;
import React from 'react';
import { RemixServer } from '@remix-run/react';
import { renderToPipeableStream } from 'react-dom/server';
import { PassThrough } from 'stream';

export default function handleRequest(
  request: Request,
  statusCode: number,
  headers: Headers,
  context: EntryContext
) {
  return new Promise<Response>((resolve, reject) => {
    let didError = false;

    const stream = renderToPipeableStream(
      <RemixServer context={context} url={request.url} />,
      {
        onShellReady() {
          const body = new PassThrough();

          headers.set('Content-Type', 'text/html');

          resolve(
            new Response(body, {
              status: didError ? 500 : statusCode,
              headers,
            })
          );

          stream.pipe(body);
        },
        onError(error: unknown) {
          didError = true;
          console.error(error);
        },
      }
    );
  });
}
