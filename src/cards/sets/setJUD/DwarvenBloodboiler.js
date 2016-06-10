"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenBloodboiler extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Bloodboiler", "Judgment", "JUD");
  }
}

module.exports = DwarvenBloodboiler;
