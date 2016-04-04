"use strict";
const Constants = require ("../../../Constants");
const OgreWarriorBase = require("../setPO2/OgreWarrior");

class OgreWarrior extends OgreWarriorBase {
  constructor(game) {
    super(game, "Ogre Warrior", "Starter 1999", "S99");
  }
}

module.exports = OgreWarrior;
