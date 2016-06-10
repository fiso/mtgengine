"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BestialMenace extends UnimplementedCard {
  constructor (game) {
    super(game, "Bestial Menace", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BestialMenace;
