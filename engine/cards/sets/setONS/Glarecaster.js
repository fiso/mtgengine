"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Glarecaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Glarecaster", "Onslaught", "ONS");
  }
}

module.exports = Glarecaster;
