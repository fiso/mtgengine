"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoneShredder extends Card {
  constructor(game) {
    super(game, "Bone Shredder", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = BoneShredder;
