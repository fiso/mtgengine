"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OtarianJuggernaut extends UnimplementedCard {
  constructor (game) {
    super(game, "Otarian Juggernaut", "Odyssey", "ODY");
  }
}

module.exports = OtarianJuggernaut;
