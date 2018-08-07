"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoyalAssassin extends UnimplementedCard {
  constructor (game) {
    super(game, "Royal Assassin", "Magic 2012", "M12");
  }
}

module.exports = RoyalAssassin;
