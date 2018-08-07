"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathcurseOgre extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathcurse Ogre", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DeathcurseOgre;
