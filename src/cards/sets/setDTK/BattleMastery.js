"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleMastery extends UnimplementedCard {
  constructor(game) {
    super(game, "Battle Mastery", "Dragons of Tarkir", "DTK");
  }
}

module.exports = BattleMastery;
