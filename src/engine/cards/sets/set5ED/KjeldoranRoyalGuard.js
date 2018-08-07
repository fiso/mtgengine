'use strict';
const Constants = require('../../../Constants');
const KjeldoranRoyalGuardBase = require('../set10E/KjeldoranRoyalGuard');

class KjeldoranRoyalGuard extends KjeldoranRoyalGuardBase {
  constructor (game) {
    super(game, 'Kjeldoran Royal Guard', 'Fifth Edition', '5ED');
  }
}

module.exports = KjeldoranRoyalGuard;
