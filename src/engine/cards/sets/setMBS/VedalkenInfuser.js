"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenInfuser extends UnimplementedCard {
  constructor (game) {
    super(game, "Vedalken Infuser", "Mirrodin Besieged", "MBS");
  }
}

module.exports = VedalkenInfuser;
