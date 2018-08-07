"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreatFurnace extends UnimplementedCard {
  constructor (game) {
    super(game, "Great Furnace", "Commander 2018", "C18");
  }
}

module.exports = GreatFurnace;
