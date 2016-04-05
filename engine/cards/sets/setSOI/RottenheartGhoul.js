"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RottenheartGhoul extends UnimplementedCard {
  constructor(game) {
    super(game, "Rottenheart Ghoul", "Shadows over Innistrad", "SOI");
  }
}

module.exports = RottenheartGhoul;
