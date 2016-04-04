"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FurnaceWhelp extends UnimplementedCard {
  constructor(game) {
    super(game, "Furnace Whelp", "Archenemy", "ARC");
  }
}

module.exports = FurnaceWhelp;
