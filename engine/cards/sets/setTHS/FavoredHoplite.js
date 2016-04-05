"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FavoredHoplite extends UnimplementedCard {
  constructor(game) {
    super(game, "Favored Hoplite", "Theros", "THS");
  }
}

module.exports = FavoredHoplite;
