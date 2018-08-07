"use strict";
const Constants = require ("../../../Constants");
const OgreTaskmasterBase = require("../setME4/OgreTaskmaster");

class OgreTaskmaster extends OgreTaskmasterBase {
  constructor (game) {
    super(game, "Ogre Taskmaster", "Portal Second Age", "P02");
  }
}

module.exports = OgreTaskmaster;
