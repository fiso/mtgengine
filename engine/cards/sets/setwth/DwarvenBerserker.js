"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenBerserker extends Card {
  constructor(game) {
    super(game, "Dwarven Berserker", "Weatherlight", "WTH");
  }
}

module.exports = DwarvenBerserker;
