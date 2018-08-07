'use strict';
const Constants = require('../../../Constants');
const IvoryGuardiansBase = require('../setME3/IvoryGuardians');

class IvoryGuardians extends IvoryGuardiansBase {
  constructor (game) {
    super(game, 'Ivory Guardians', 'Fifth Edition', '5ED');
  }
}

module.exports = IvoryGuardians;
