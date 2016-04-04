"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SingeMindOgre extends Card {
  constructor(game) {
    super(game, "Singe-Mind Ogre", "Alara Reborn", "ARB");
  }
}

module.exports = SingeMindOgre;
