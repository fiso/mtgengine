"use strict";
const Constants = require ("../../../Constants");
const OgreArsonistBase = require("../setPI13/OgreArsonist");

class OgreArsonist extends OgreArsonistBase {
  constructor (game) {
    super(game, "Ogre Arsonist", "Portal Second Age", "P02");
  }
}

module.exports = OgreArsonist;
