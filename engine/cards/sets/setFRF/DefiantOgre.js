"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefiantOgre extends Card {
  constructor(game) {
    super(game, "Defiant Ogre", "Fate Reforged", "FRF");
  }
}

module.exports = DefiantOgre;
