"use strict";
const Constants = require ("../../../Constants");
const OgreTaskmasterBase = require("../setME4/OgreTaskmaster");

class OgreTaskmaster extends OgreTaskmasterBase {
  constructor (game) {
    super(game, "Ogre Taskmaster", "Seventh Edition", "7ED");
  }
}

module.exports = OgreTaskmaster;
