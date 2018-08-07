"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CripplingFatigue extends UnimplementedCard {
  constructor (game) {
    super(game, "Crippling Fatigue", "Hachette UK", "PHUK");
  }
}

module.exports = CripplingFatigue;
