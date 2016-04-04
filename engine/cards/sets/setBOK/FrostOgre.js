"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrostOgre extends Card {
  constructor(game) {
    super(game, "Frost Ogre", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = FrostOgre;
