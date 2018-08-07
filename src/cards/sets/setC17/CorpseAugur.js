"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorpseAugur extends UnimplementedCard {
  constructor (game) {
    super(game, "Corpse Augur", "Commander 2017", "C17");
  }
}

module.exports = CorpseAugur;
