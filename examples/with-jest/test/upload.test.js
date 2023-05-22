import { callApiFormData } from '../src/uploadUtils';
import { server } from '../src/mocks/server';
import { rest } from 'msw';

it('works when uploading a file', async () => {
    server.use(
      rest.post('/test-file-upload', async (req, res, ctx) => {
      console.log('HERE!!!', req, res, ctx);
        return res(ctx.status(204), ctx.json({}));
      })
    );
  
    const data = new FormData();
    const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
    data.append('files', file, file.name);
  
    await fetch('/test-file-upload', {
      method: 'POST',
      body: data,
    });
      
    console.log('DONE');
});