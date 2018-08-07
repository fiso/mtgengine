"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarPriestofThune extends UnimplementedCard {
  constructor (game) {
    super(game, "War Priest of Thune", "Eternal Masters", "EMA");
  }
}

module.exports = WarPriestofThune;
