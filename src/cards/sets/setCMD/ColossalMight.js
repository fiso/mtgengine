"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ColossalMight extends UnimplementedCard {
  constructor (game) {
    super(game, "Colossal Might", "Commander 2011", "CMD");
  }
}

module.exports = ColossalMight;
