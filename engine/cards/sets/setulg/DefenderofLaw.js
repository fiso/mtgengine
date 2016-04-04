"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefenderofLaw extends UnimplementedCard {
  constructor(game) {
    super(game, "Defender of Law", "Urza's Legacy", "ULG");
  }
}

module.exports = DefenderofLaw;
