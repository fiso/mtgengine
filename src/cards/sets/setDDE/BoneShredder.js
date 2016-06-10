"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoneShredder extends UnimplementedCard {
  constructor (game) {
    super(game, "Bone Shredder", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = BoneShredder;
