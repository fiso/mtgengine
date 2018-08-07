"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BakisCurse extends UnimplementedCard {
  constructor (game) {
    super(game, "Baki's Curse", "Homelands", "HML");
  }
}

module.exports = BakisCurse;
