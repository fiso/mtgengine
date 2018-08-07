"use strict";
const Constants = require ("../../../Constants");
const OgreWarriorBase = require("../setS00/OgreWarrior");

class OgreWarrior extends OgreWarriorBase {
  constructor (game) {
    super(game, "Ogre Warrior", "Portal Second Age", "P02");
  }
}

module.exports = OgreWarrior;
