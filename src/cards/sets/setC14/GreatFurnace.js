"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreatFurnace extends UnimplementedCard {
  constructor(game) {
    super(game, "Great Furnace", "Commander 2014", "C14");
  }
}

module.exports = GreatFurnace;
