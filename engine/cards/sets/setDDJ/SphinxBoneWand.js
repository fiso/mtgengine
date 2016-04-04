"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SphinxBoneWand extends Card {
  constructor(game) {
    super(game, "Sphinx-Bone Wand", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = SphinxBoneWand;
