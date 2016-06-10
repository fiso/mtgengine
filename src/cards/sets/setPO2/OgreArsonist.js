"use strict";
const Constants = require ("../../../Constants");
const OgreArsonistBase = require("../setpMEI/OgreArsonist");

class OgreArsonist extends OgreArsonistBase {
  constructor (game) {
    super(game, "Ogre Arsonist", "Portal Second Age", "PO2");
  }
}

module.exports = OgreArsonist;
