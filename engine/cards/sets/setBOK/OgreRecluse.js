"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OgreRecluse extends Card {
  constructor(game) {
    super(game, "Ogre Recluse", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = OgreRecluse;
