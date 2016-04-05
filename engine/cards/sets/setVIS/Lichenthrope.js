"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lichenthrope extends UnimplementedCard {
  constructor(game) {
    super(game, "Lichenthrope", "Visions", "VIS");
  }
}

module.exports = Lichenthrope;
