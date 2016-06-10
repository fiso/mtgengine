"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gridlock extends UnimplementedCard {
  constructor (game) {
    super(game, "Gridlock", "Gatecrash", "GTC");
  }
}

module.exports = Gridlock;
