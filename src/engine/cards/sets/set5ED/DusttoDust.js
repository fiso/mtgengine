'use strict';
const Constants = require('../../../Constants');
const DusttoDustBase = require('../setME4/DusttoDust');

class DusttoDust extends DusttoDustBase {
  constructor (game) {
    super(game, 'Dust to Dust', 'Fifth Edition', '5ED');
  }
}

module.exports = DusttoDust;
