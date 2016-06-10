"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Defeat extends UnimplementedCard {
  constructor (game) {
    super(game, "Defeat", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Defeat;
