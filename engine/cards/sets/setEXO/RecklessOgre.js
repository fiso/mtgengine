"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RecklessOgre extends Card {
  constructor(game) {
    super(game, "Reckless Ogre", "Exodus", "EXO");
  }
}

module.exports = RecklessOgre;
