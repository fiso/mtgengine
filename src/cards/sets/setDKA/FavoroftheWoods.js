"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FavoroftheWoods extends UnimplementedCard {
  constructor(game) {
    super(game, "Favor of the Woods", "Dark Ascension", "DKA");
  }
}

module.exports = FavoroftheWoods;
