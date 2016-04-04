"use strict";
const Constants = require ("../../../Constants");
const OgreBattledriverBase = require("../setDDN/OgreBattledriver");

class OgreBattledriver extends OgreBattledriverBase {
  constructor(game) {
    super(game, "Ogre Battledriver", "Media Inserts", "pMEI");
  }
}

module.exports = OgreBattledriver;
