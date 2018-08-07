"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WasteNot extends UnimplementedCard {
  constructor (game) {
    super(game, "Waste Not", "Commander 2016", "C16");
  }
}

module.exports = WasteNot;
