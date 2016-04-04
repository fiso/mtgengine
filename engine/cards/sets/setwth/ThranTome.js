"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThranTome extends Card {
  constructor(game) {
    super(game, "Thran Tome", "Weatherlight", "WTH");
  }
}

module.exports = ThranTome;
