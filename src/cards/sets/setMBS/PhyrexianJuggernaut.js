"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianJuggernaut extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Juggernaut", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PhyrexianJuggernaut;
