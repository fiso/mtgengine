"use strict";
const Constants = require ("../../../Constants");
const OgreBase = require("../setTC16/Ogre");

class Ogre extends OgreBase {
  constructor (game) {
    super(game, "Ogre", "Conspiracy Tokens", "TCNS");
  }
}

module.exports = Ogre;
