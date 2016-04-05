"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContagiousNim extends UnimplementedCard {
  constructor(game) {
    super(game, "Contagious Nim", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ContagiousNim;
