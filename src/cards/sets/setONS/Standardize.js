"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Standardize extends UnimplementedCard {
  constructor (game) {
    super(game, "Standardize", "Onslaught", "ONS");
  }
}

module.exports = Standardize;
