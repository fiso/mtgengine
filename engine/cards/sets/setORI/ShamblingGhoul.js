"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShamblingGhoul extends UnimplementedCard {
  constructor(game) {
    super(game, "Shambling Ghoul", "Magic Origins", "ORI");
  }
}

module.exports = ShamblingGhoul;
