"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoltaicKey extends UnimplementedCard {
  constructor (game) {
    super(game, "Voltaic Key", "Magic 2011", "M11");
  }
}

module.exports = VoltaicKey;
