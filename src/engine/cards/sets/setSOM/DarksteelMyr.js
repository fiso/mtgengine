"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Darksteel Myr", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DarksteelMyr;
