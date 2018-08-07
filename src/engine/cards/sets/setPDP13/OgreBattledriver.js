"use strict";
const Constants = require ("../../../Constants");
const OgreBattledriverBase = require("../setDDN/OgreBattledriver");

class OgreBattledriver extends OgreBattledriverBase {
  constructor (game) {
    super(game, "Ogre Battledriver", "Duels of the Planeswalkers Promos 2013", "PDP13");
  }
}

module.exports = OgreBattledriver;
