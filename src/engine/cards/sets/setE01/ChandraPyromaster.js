"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChandraPyromaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Chandra, Pyromaster", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = ChandraPyromaster;
