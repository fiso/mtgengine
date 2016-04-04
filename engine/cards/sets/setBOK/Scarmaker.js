"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scarmaker extends UnimplementedCard {
  constructor(game) {
    super(game, "Scarmaker", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Scarmaker;
