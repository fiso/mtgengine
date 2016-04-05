"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SphinxBoneWand extends UnimplementedCard {
  constructor(game) {
    super(game, "Sphinx-Bone Wand", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = SphinxBoneWand;
