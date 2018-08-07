"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shriekhorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Shriekhorn", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Shriekhorn;
