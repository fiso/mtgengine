"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonWhelp extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Whelp", "Archenemy", "ARC");
  }
}

module.exports = DragonWhelp;
