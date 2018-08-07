"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Conversion extends UnimplementedCard {
  constructor (game) {
    super(game, "Conversion", "Masters Edition IV", "ME4");
  }
}

module.exports = Conversion;
