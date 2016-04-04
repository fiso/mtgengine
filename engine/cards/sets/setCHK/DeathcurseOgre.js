"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathcurseOgre extends Card {
  constructor(game) {
    super(game, "Deathcurse Ogre", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DeathcurseOgre;
