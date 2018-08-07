"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrinkofDisaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Brink of Disaster", "Magic 2012", "M12");
  }
}

module.exports = BrinkofDisaster;
