"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OgreTaskmaster extends Card {
  constructor(game) {
    super(game, "Ogre Taskmaster", "Eighth Edition", "8ED");
  }
}

module.exports = OgreTaskmaster;
