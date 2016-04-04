"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OgreShaman extends Card {
  constructor(game) {
    super(game, "Ogre Shaman", "Exodus", "EXO");
  }
}

module.exports = OgreShaman;
