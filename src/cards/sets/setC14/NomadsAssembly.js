"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NomadsAssembly extends UnimplementedCard {
  constructor (game) {
    super(game, "Nomads' Assembly", "Commander 2014", "C14");
  }
}

module.exports = NomadsAssembly;
