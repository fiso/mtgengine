"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnotvinePaladinBase = require("../setARB/KnotvinePaladin.js");

class KnotvinePaladin extends KnotvinePaladinBase {
  constructor(game) {
    super(game, "Knotvine Paladin", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KnotvinePaladin;
