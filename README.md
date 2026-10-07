# mylib

A small JavaScript library with basic arithmetic operations (`add`, `subtract`, `multiply`, `divide`), a simple main program, and a Mocha + Chai unit test suite.

## Structure

- `mylib.js` – the library
- `main.js` – main program that uses the library
- `tests/mylib.test.js` – unit tests

## Usage

```bash
npm install
npm start     # runs the main program
npm test      # runs the unit tests only
```

`divide(a, b)` throws an `Error` when `b` is `0`.
