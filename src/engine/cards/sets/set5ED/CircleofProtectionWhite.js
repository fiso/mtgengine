'use strict';
const Constants = require('../../../Constants');
const CircleofProtectionWhiteBase = require('../set8ED/CircleofProtectionWhite');

class CircleofProtectionWhite extends CircleofProtectionWhiteBase {
  constructor (game) {
    super(game, 'Circle of Protection: White', 'Fifth Edition', '5ED');
  }
}

module.exports = CircleofProtectionWhite;
