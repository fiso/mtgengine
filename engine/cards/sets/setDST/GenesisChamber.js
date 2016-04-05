"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GenesisChamber extends UnimplementedCard {
  constructor(game) {
    super(game, "Genesis Chamber", "Darksteel", "DST");
  }
}

module.exports = GenesisChamber;
