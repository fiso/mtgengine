"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scour extends UnimplementedCard {
  constructor(game) {
    super(game, "Scour", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Scour;
