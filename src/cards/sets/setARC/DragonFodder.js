"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonFodder extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Fodder", "Archenemy", "ARC");
  }
}

module.exports = DragonFodder;
