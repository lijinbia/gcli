import * as https from 'https';

export function getResByUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk.toString();
            });
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });
    });
}
