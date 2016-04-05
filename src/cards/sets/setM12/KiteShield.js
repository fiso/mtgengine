"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KiteShield extends UnimplementedCard {
  constructor(game) {
    super(game, "Kite Shield", "Magic 2012", "M12");
  }
}

module.exports = KiteShield;
