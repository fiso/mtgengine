"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Strandwalker extends UnimplementedCard {
  constructor (game) {
    super(game, "Strandwalker", "Mirrodin Besieged", "MBS");
  }
}

module.exports = Strandwalker;
