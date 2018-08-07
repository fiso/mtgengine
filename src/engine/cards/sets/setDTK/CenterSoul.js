"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CenterSoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Center Soul", "Dragons of Tarkir", "DTK");
  }
}

module.exports = CenterSoul;
