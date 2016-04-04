"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RotShambler extends UnimplementedCard {
  constructor(game) {
    super(game, "Rot Shambler", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RotShambler;
