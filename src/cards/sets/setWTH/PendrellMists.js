"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PendrellMists extends UnimplementedCard {
  constructor (game) {
    super(game, "Pendrell Mists", "Weatherlight", "WTH");
  }
}

module.exports = PendrellMists;
