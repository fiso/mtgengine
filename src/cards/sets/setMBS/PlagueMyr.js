"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Plague Myr", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PlagueMyr;
