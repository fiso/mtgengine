"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DimirAqueduct extends UnimplementedCard {
  constructor (game) {
    super(game, "Dimir Aqueduct", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DimirAqueduct;
