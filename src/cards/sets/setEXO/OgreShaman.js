"use strict";
const Constants = require ("../../../Constants");
const OgreShamanBase = require("../setTPR/OgreShaman");

class OgreShaman extends OgreShamanBase {
  constructor (game) {
    super(game, "Ogre Shaman", "Exodus", "EXO");
  }
}

module.exports = OgreShaman;
