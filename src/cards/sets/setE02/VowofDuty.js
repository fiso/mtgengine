"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VowofDuty extends UnimplementedCard {
  constructor (game) {
    super(game, "Vow of Duty", "Explorers of Ixalan", "E02");
  }
}

module.exports = VowofDuty;
