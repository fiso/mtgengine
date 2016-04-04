"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OgresCleaver extends Card {
  constructor(game) {
    super(game, "Ogre's Cleaver", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = OgresCleaver;
