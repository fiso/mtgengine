"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fling extends UnimplementedCard {
  constructor (game) {
    super(game, "Fling", "Arena League", "pARL");
  }
}

module.exports = Fling;
