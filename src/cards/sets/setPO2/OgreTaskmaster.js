"use strict";
const Constants = require ("../../../Constants");
const OgreTaskmasterBase = require("../set8ED/OgreTaskmaster");

class OgreTaskmaster extends OgreTaskmasterBase {
  constructor(game) {
    super(game, "Ogre Taskmaster", "Portal Second Age", "PO2");
  }
}

module.exports = OgreTaskmaster;
