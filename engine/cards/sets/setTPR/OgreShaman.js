"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OgreShamanBase = require("../setEXO/OgreShaman.js");

class OgreShaman extends OgreShamanBase {
  constructor(game) {
    super(game, "Ogre Shaman", "Tempest Remastered", "TPR");
  }
}

module.exports = OgreShaman;
