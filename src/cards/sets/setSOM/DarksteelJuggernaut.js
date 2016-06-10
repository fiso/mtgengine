"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelJuggernaut extends UnimplementedCard {
  constructor (game) {
    super(game, "Darksteel Juggernaut", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DarksteelJuggernaut;
