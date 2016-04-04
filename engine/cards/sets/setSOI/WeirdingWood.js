"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeirdingWood extends UnimplementedCard {
  constructor(game) {
    super(game, "Weirding Wood", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WeirdingWood;
