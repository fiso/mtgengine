"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorpseAugur extends Card {
  constructor(game) {
    super(game, "Corpse Augur", "Commander 2015", "C15");
  }
}

module.exports = CorpseAugur;
