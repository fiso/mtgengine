"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonWhelp extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Whelp", "Commander Anthology", "CMA");
  }
}

module.exports = DragonWhelp;
