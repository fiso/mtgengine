'use strict';
const Constants = require('../../../Constants');
const OrderoftheWhiteShieldBase = require('../setME2/OrderoftheWhiteShield');

class OrderoftheWhiteShield extends OrderoftheWhiteShieldBase {
  constructor (game) {
    super(game, 'Order of the White Shield', 'Fifth Edition', '5ED');
  }
}

module.exports = OrderoftheWhiteShield;
