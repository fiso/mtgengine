'use strict';
const Constants = require('../../../Constants');
const AkronLegionnaireBase = require('../setME3/AkronLegionnaire');

class AkronLegionnaire extends AkronLegionnaireBase {
  constructor (game) {
    super(game, 'Akron Legionnaire', 'Fifth Edition', '5ED');
  }
}

module.exports = AkronLegionnaire;
