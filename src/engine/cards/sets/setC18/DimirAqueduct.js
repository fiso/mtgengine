"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DimirAqueduct extends UnimplementedCard {
  constructor (game) {
    super(game, "Dimir Aqueduct", "Commander 2018", "C18");
  }
}

module.exports = DimirAqueduct;
