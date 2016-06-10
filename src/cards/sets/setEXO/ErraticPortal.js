"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErraticPortal extends UnimplementedCard {
  constructor (game) {
    super(game, "Erratic Portal", "Exodus", "EXO");
  }
}

module.exports = ErraticPortal;
