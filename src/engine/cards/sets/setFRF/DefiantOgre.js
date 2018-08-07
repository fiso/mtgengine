"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefiantOgre extends UnimplementedCard {
  constructor (game) {
    super(game, "Defiant Ogre", "Fate Reforged", "FRF");
  }
}

module.exports = DefiantOgre;
