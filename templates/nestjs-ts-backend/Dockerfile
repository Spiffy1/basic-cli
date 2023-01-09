FROM node:18.1.0 as builder

RUN apt-get update && \
    apt-get install -y libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libdbus-1-3 libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libasound2 libatspi2.0-0 libwayland-client0 

RUN groupadd -r pwuser && useradd -r -g pwuser -G audio,video pwuser \
    && mkdir -p /home/pwuser/Downloads \
    && chown -R pwuser:pwuser /home/pwuser

WORKDIR /app
COPY . .

RUN npm i \
    && npm run build 

RUN chown -R pwuser:pwuser node_modules \
    && chown -R pwuser:pwuser package.json \
    && chown -R pwuser:pwuser package-lock.json

USER pwuser 

RUN npx playwright install

CMD ["sh", "-c", "node dist/main.js"]