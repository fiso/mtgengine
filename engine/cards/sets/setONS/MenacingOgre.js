"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MenacingOgre extends Card {
  constructor(game) {
    super(game, "Menacing Ogre", "Onslaught", "ONS");
  }
}

module.exports = MenacingOgre;
