"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContagionEngine extends UnimplementedCard {
  constructor(game) {
    super(game, "Contagion Engine", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ContagionEngine;
