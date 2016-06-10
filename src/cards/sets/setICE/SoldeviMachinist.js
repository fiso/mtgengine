"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoldeviMachinist extends UnimplementedCard {
  constructor (game) {
    super(game, "Soldevi Machinist", "Ice Age", "ICE");
  }
}

module.exports = SoldeviMachinist;
