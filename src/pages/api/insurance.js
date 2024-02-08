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

    const findVariant = allVaraints.variants.find((item) => {
      if (
        cartValue.value >= 0 &&
        cartValue.value <= 70 &&
        item.sku == 'KAISHIPINSURE001'
      ) {
        return item;
      } else if (
        cartValue.value >= 71 &&
        cartValue.value <= 149 &&
        item.sku == 'KAISHIPINSURE002'
      ) {
        return item;
      } else if (
        cartValue.value >= 150 &&
        cartValue.value <= 199 &&
        item.sku == 'KAISHIPINSURE003'
      ) {
        return item;
      } else if (
        cartValue.value >= 200 &&
        cartValue.value <= 249 &&
        item.sku == 'KAISHIPINSURE004'
      ) {
        return item;
      } else if (
        cartValue.value >= 250 &&
        cartValue.value <= 300 &&
        item.sku == 'KAISHIPINSURE005'
      ) {
        return item;
      } else if (
        cartValue.value >= 301 &&
        cartValue.value <= 349 &&
        item.sku == 'KAISHIPINSURE006'
      ) {
        return item;
      } else if (
        cartValue.value >= 350 &&
        cartValue.value <= 399 &&
        item.sku == 'KAISHIPINSURE007'
      ) {
        return item;
      } else if (
        cartValue.value >= 400 &&
        cartValue.value <= 449 &&
        item.sku == 'KAISHIPINSURE008'
      ) {
        return item;
      } else if (
        cartValue.value >= 450 &&
        cartValue.value <= 499 &&
        item.sku == 'KAISHIPINSURE009'
      ) {
        return item;
      } else if (
        cartValue.value >= 500 &&
        cartValue.value <= 549 &&
        item.sku == 'KAISHIPINSURE010'
      ) {
        return item;
      } else if (
        cartValue.value >= 550 &&
        cartValue.value <= 600 &&
        item.sku == 'KAISHIPINSURE011'
      ) {
        return item;
      } else if (
        cartValue.value >= 601 &&
        cartValue.value <= 750 &&
        item.sku == 'KAISHIPINSURE012'
      ) {
        return item;
      } else if (cartValue.value >= 751 && item.sku == 'KAISHIPINSURE013') {
        return item;
      }
    });

    res.status(200).json({ variant: findVariant, all: allVaraints.variants });
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
}
