"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuperiorNumbers extends UnimplementedCard {
  constructor (game) {
    super(game, "Superior Numbers", "Mirage", "MIR");
  }
}

module.exports = SuperiorNumbers;
