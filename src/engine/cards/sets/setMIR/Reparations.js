"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reparations extends UnimplementedCard {
  constructor (game) {
    super(game, "Reparations", "Mirage", "MIR");
  }
}

module.exports = Reparations;
