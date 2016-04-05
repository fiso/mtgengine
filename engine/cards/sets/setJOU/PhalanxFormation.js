"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhalanxFormation extends UnimplementedCard {
  constructor(game) {
    super(game, "Phalanx Formation", "Journey into Nyx", "JOU");
  }
}

module.exports = PhalanxFormation;
