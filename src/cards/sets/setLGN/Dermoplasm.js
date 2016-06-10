"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dermoplasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Dermoplasm", "Legions", "LGN");
  }
}

module.exports = Dermoplasm;
