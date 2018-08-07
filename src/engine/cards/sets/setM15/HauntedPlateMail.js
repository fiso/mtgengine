"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HauntedPlateMail extends UnimplementedCard {
  constructor (game) {
    super(game, "Haunted Plate Mail", "Magic 2015", "M15");
  }
}

module.exports = HauntedPlateMail;
