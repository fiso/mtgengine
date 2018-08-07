"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CumberStone extends UnimplementedCard {
  constructor (game) {
    super(game, "Cumber Stone", "Conflux", "CON");
  }
}

module.exports = CumberStone;
