'use strict';
const Constants = require('../../../Constants');
const AmbushPartyBase = require('../setME2/AmbushParty');

class AmbushParty extends AmbushPartyBase {
  constructor (game) {
    super(game, 'Ambush Party', 'Fifth Edition', '5ED');
  }
}

module.exports = AmbushParty;
