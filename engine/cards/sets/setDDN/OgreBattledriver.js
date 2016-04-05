"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreBattledriver extends UnimplementedCard {
  constructor(game) {
    super(game, "Ogre Battledriver", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = OgreBattledriver;
