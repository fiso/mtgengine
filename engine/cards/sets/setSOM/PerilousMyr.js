"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerilousMyr extends UnimplementedCard {
  constructor(game) {
    super(game, "Perilous Myr", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PerilousMyr;
