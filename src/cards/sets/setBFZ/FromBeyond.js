"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FromBeyond extends UnimplementedCard {
  constructor (game) {
    super(game, "From Beyond", "Battle for Zendikar", "BFZ");
  }
}

module.exports = FromBeyond;
