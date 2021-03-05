# moduloze test

```
npm install
npm run build
```

you should get a new `out.js` file

## Expected result

I want to be able to import that file (ESM) and use it as follows:

```js
import { UpdateDraftRequest } from "./out.js"
// more code here
```

## Possible issues

- not setting the correct dependency map
- missing configuration

---

Thanks in advance!!
