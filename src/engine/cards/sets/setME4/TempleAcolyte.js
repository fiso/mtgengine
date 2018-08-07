"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleAcolyte extends UnimplementedCard {
  constructor (game) {
    super(game, "Temple Acolyte", "Masters Edition IV", "ME4");
  }
}

module.exports = TempleAcolyte;
