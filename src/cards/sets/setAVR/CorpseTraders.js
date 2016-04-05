"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorpseTraders extends UnimplementedCard {
  constructor(game) {
    super(game, "Corpse Traders", "Avacyn Restored", "AVR");
  }
}

module.exports = CorpseTraders;
