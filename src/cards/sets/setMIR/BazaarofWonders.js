"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BazaarofWonders extends UnimplementedCard {
  constructor (game) {
    super(game, "Bazaar of Wonders", "Mirage", "MIR");
  }
}

module.exports = BazaarofWonders;
