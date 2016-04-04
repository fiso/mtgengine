"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OgreWarriorBase = require("../setPO2/OgreWarrior.js");

class OgreWarrior extends OgreWarriorBase {
  constructor(game) {
    super(game, "Ogre Warrior", "Starter 2000", "S00");
  }
}

module.exports = OgreWarrior;
