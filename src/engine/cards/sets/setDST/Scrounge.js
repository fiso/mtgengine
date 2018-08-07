"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scrounge extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrounge", "Darksteel", "DST");
  }
}

module.exports = Scrounge;
