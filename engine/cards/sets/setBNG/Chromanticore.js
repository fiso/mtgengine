"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chromanticore extends UnimplementedCard {
  constructor(game) {
    super(game, "Chromanticore", "Born of the Gods", "BNG");
  }
}

module.exports = Chromanticore;
