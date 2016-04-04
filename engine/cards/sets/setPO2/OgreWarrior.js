"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OgreWarrior extends Card {
  constructor(game) {
    super(game, "Ogre Warrior", "Portal Second Age", "PO2");
  }
}

module.exports = OgreWarrior;
