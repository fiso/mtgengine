"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Weakness extends UnimplementedCard {
  constructor (game) {
    super(game, "Weakness", "Masters Edition IV", "ME4");
  }
}

module.exports = Weakness;
