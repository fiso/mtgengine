"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chainflinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Chainflinger", "Odyssey", "ODY");
  }
}

module.exports = Chainflinger;
