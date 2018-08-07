"use strict";
const Constants = require ("../../../Constants");
const OgreBase = require("../setTC16/Ogre");

class Ogre extends OgreBase {
  constructor (game) {
    super(game, "Ogre", "Worldwake Tokens", "TWWK");
  }
}

module.exports = Ogre;
