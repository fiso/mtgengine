"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartyrsCry extends UnimplementedCard {
  constructor (game) {
    super(game, "Martyr's Cry", "Masters Edition IV", "ME4");
  }
}

module.exports = MartyrsCry;
