"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenBerserker extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Berserker", "Weatherlight", "WTH");
  }
}

module.exports = DwarvenBerserker;
