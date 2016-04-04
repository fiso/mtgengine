"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OgreBattledriverBase = require("../setDDN/OgreBattledriver.js");

class OgreBattledriver extends OgreBattledriverBase {
  constructor(game) {
    super(game, "Ogre Battledriver", "Media Inserts", "pMEI");
  }
}

module.exports = OgreBattledriver;
