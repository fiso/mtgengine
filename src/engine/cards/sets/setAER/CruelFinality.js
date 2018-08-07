"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CruelFinality extends UnimplementedCard {
  constructor (game) {
    super(game, "Cruel Finality", "Aether Revolt", "AER");
  }
}

module.exports = CruelFinality;
