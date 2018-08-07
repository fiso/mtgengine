"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JalumTome extends UnimplementedCard {
  constructor (game) {
    super(game, "Jalum Tome", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = JalumTome;
