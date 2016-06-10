"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PistusStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Pistus Strike", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PistusStrike;
