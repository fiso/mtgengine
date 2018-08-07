"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LilianasSpoils extends UnimplementedCard {
  constructor (game) {
    super(game, "Liliana's Spoils", "Core Set 2019", "M19");
  }
}

module.exports = LilianasSpoils;
