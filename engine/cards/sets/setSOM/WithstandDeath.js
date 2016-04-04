"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WithstandDeath extends UnimplementedCard {
  constructor(game) {
    super(game, "Withstand Death", "Scars of Mirrodin", "SOM");
  }
}

module.exports = WithstandDeath;
