"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SemblanceAnvil extends UnimplementedCard {
  constructor (game) {
    super(game, "Semblance Anvil", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SemblanceAnvil;
