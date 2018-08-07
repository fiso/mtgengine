'use strict';
const Constants = require('../../../Constants');
const SerumVisionsBase = require('../setMM3/SerumVisions');

class SerumVisions extends SerumVisionsBase {
  constructor (game) {
    super(game, 'Serum Visions', 'Fifth Dawn', '5DN');
  }
}

module.exports = SerumVisions;
