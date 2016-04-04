"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OgreTaskmasterBase = require("../set8ED/OgreTaskmaster.js");

class OgreTaskmaster extends OgreTaskmasterBase {
  constructor(game) {
    super(game, "Ogre Taskmaster", "Mercadian Masques", "MMQ");
  }
}

module.exports = OgreTaskmaster;
