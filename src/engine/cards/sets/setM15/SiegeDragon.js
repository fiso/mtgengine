"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SiegeDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Siege Dragon", "Magic 2015", "M15");
  }
}

module.exports = SiegeDragon;
