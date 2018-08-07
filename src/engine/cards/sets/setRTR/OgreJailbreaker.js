"use strict";
const Constants = require ("../../../Constants");
const OgreJailbreakerBase = require("../setMM3/OgreJailbreaker");

class OgreJailbreaker extends OgreJailbreakerBase {
  constructor (game) {
    super(game, "Ogre Jailbreaker", "Return to Ravnica", "RTR");
  }
}

module.exports = OgreJailbreaker;
