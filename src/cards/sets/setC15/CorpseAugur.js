"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorpseAugur extends UnimplementedCard {
  constructor (game) {
    super(game, "Corpse Augur", "Commander 2015", "C15");
  }
}

module.exports = CorpseAugur;
