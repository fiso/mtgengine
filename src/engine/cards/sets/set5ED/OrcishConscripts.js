'use strict';
const Constants = require('../../../Constants');
const OrcishConscriptsBase = require('../setME2/OrcishConscripts');

class OrcishConscripts extends OrcishConscriptsBase {
  constructor (game) {
    super(game, 'Orcish Conscripts', 'Fifth Edition', '5ED');
  }
}

module.exports = OrcishConscripts;
