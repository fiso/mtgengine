'use strict';
const Constants = require('../../../Constants');
const DemonicHordesBase = require('../setME4/DemonicHordes');

class DemonicHordes extends DemonicHordesBase {
  constructor (game) {
    super(game, 'Demonic Hordes', 'Unlimited Edition', '2ED');
  }
}

module.exports = DemonicHordes;
