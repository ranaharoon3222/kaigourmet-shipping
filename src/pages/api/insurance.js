// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cors from 'cors';

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
};

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method !== 'POST') return res.status(200).json({ name: 'Hi AFS' });

  const cartValue = JSON?.parse(req?.body);

  try {
    const allVariantsUrl = `https://kaigourmet-com.myshopify.com/admin/api/2023-01/products/6976554106967/variants.json`;

    const fetchAllVaraints = await fetch(allVariantsUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': process.env.TOKEN,
      },
    });

    const allVaraints = await fetchAllVaraints.json();

    const cartValueRound = Math.round(cartValue.value);

    const findVariant = allVaraints.variants.find((item) => {
      if (
        cartValueRound >= 0 &&
        cartValueRound <= 70 &&
        item.title == 'KAISHIPINSURE001'
      ) {
        return item;
      } else if (
        cartValueRound >= 71 &&
        cartValueRound <= 149 &&
        item.title == 'KAISHIPINSURE002'
      ) {
        return item;
      } else if (
        cartValueRound >= 150 &&
        cartValueRound <= 199 &&
        item.title == 'KAISHIPINSURE003'
      ) {
        return item;
      } else if (
        cartValueRound >= 200 &&
        cartValueRound <= 249 &&
        item.title == 'KAISHIPINSURE004'
      ) {
        return item;
      } else if (
        cartValueRound >= 250 &&
        cartValueRound <= 300 &&
        item.title == 'KAISHIPINSURE005'
      ) {
        return item;
      } else if (
        cartValueRound >= 301 &&
        cartValueRound <= 349 &&
        item.title == 'KAISHIPINSURE006'
      ) {
        return item;
      } else if (
        cartValueRound >= 350 &&
        cartValueRound <= 399 &&
        item.title == 'KAISHIPINSURE007'
      ) {
        return item;
      } else if (
        cartValueRound >= 400 &&
        cartValueRound <= 449 &&
        item.title == 'KAISHIPINSURE008'
      ) {
        return item;
      } else if (
        cartValueRound >= 450 &&
        cartValueRound <= 499 &&
        item.title == 'KAISHIPINSURE009'
      ) {
        return item;
      } else if (
        cartValueRound >= 500 &&
        cartValueRound <= 549 &&
        item.title == 'KAISHIPINSURE010'
      ) {
        return item;
      } else if (
        cartValueRound >= 550 &&
        cartValueRound <= 600 &&
        item.title == 'KAISHIPINSURE011'
      ) {
        return item;
      } else if (
        cartValueRound >= 601 &&
        cartValueRound <= 750 &&
        item.title == 'KAISHIPINSURE012'
      ) {
        return item;
      } else if (cartValueRound >= 751 && item.title == 'KAISHIPINSURE013') {
        return item;
      }
    });

    res.status(200).json({ variant: findVariant, all: allVaraints.variants });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
}
