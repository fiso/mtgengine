"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KaervektheMerciless extends UnimplementedCard {
  constructor (game) {
    super(game, "Kaervek the Merciless", "Archenemy", "ARC");
  }
}

module.exports = KaervektheMerciless;
