"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildHunger extends UnimplementedCard {
  constructor(game) {
    super(game, "Wild Hunger", "Dark Ascension", "DKA");
  }
}

module.exports = WildHunger;
