"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SalvageScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Salvage Scout", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SalvageScout;
