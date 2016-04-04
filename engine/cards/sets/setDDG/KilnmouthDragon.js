"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KilnmouthDragonBase = require("../setARC/KilnmouthDragon.js");

class KilnmouthDragon extends KilnmouthDragonBase {
  constructor(game) {
    super(game, "Kilnmouth Dragon", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KilnmouthDragon;
