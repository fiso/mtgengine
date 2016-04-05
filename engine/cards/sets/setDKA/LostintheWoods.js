"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LostintheWoods extends UnimplementedCard {
  constructor(game) {
    super(game, "Lost in the Woods", "Dark Ascension", "DKA");
  }
}

module.exports = LostintheWoods;
