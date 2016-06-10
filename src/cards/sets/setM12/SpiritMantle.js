"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritMantle extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit Mantle", "Magic 2012", "M12");
  }
}

module.exports = SpiritMantle;
