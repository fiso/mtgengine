"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SouthernElephant extends UnimplementedCard {
  constructor (game) {
    super(game, "Southern Elephant", "Masters Edition IV", "ME4");
  }
}

module.exports = SouthernElephant;
