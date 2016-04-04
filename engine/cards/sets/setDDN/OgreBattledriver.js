"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OgreBattledriver extends Card {
  constructor(game) {
    super(game, "Ogre Battledriver", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = OgreBattledriver;
