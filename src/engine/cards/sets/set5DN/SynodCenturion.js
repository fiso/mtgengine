'use strict';
const Constants = require('../../../Constants');
const SynodCenturionBase = require('../setDDF/SynodCenturion');

class SynodCenturion extends SynodCenturionBase {
  constructor (game) {
    super(game, 'Synod Centurion', 'Fifth Dawn', '5DN');
  }
}

module.exports = SynodCenturion;
