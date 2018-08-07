"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrossRipper extends UnimplementedCard {
  constructor (game) {
    super(game, "Dross Ripper", "Mirrodin Besieged", "MBS");
  }
}

module.exports = DrossRipper;
