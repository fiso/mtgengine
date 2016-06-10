"use strict";
const Constants = require ("../../../Constants");
const OgreShamanBase = require("../setEXO/OgreShaman");

class OgreShaman extends OgreShamanBase {
  constructor (game) {
    super(game, "Ogre Shaman", "Tempest Remastered", "TPR");
  }
}

module.exports = OgreShaman;
