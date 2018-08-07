"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThranTome extends UnimplementedCard {
  constructor (game) {
    super(game, "Thran Tome", "Weatherlight", "WTH");
  }
}

module.exports = ThranTome;
