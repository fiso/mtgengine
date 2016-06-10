"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrostBreath extends UnimplementedCard {
  constructor (game) {
    super(game, "Frost Breath", "Magic 2012", "M12");
  }
}

module.exports = FrostBreath;
