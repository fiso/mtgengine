"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SepticRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Septic Rats", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SepticRats;
