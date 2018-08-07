"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpittingGourna extends UnimplementedCard {
  constructor (game) {
    super(game, "Spitting Gourna", "Onslaught", "ONS");
  }
}

module.exports = SpittingGourna;
