#!/usr/bin/env node
const glob = require('glob');
const fs = require('fs');

glob('src/engine/cards/sets/**/*.js', (err, files) => {
  console.log(`${files.length} cards total`);
  let unimplemented = 0;
  let implemented = 0;
  let reprints = 0;
  for (const file of files) {
    const contents = fs.readFileSync(file);
    if (contents.indexOf('extends UnimplementedCard') !== -1) {
      unimplemented++;
    } else if (contents.indexOf('extends Card') !== -1) {
      implemented++;
    } else {
      reprints++;
    }
  }

  const totalToImplement = implemented + unimplemented;

  console.log(`${reprints} reprints`);
  console.log(`${implemented} implemented cards`);
  console.log(`${unimplemented} unimplemented cards`);
  console.log(`${(implemented / totalToImplement * 100).toFixed(2)}% done`);
});
