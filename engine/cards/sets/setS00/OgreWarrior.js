"use strict";
const Constants = require ("../../../Constants");
const OgreWarriorBase = require("../setPO2/OgreWarrior");

class OgreWarrior extends OgreWarriorBase {
  constructor(game) {
    super(game, "Ogre Warrior", "Starter 2000", "S00");
  }
}

module.exports = OgreWarrior;
