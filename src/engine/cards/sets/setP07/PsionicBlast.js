"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsionicBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Psionic Blast", "Magic Player Rewards 2007", "P07");
  }
}

module.exports = PsionicBlast;
