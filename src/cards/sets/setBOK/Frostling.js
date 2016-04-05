"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Frostling extends UnimplementedCard {
  constructor(game) {
    super(game, "Frostling", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Frostling;
