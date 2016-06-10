"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SupplyLineCranes extends UnimplementedCard {
  constructor (game) {
    super(game, "Supply-Line Cranes", "Journey into Nyx", "JOU");
  }
}

module.exports = SupplyLineCranes;
