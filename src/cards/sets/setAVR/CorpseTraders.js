"use strict";
const Constants = require ("../../../Constants");
const CorpseTradersBase = require("../setDDM/CorpseTraders");

class CorpseTraders extends CorpseTradersBase {
  constructor (game) {
    super(game, "Corpse Traders", "Avacyn Restored", "AVR");
  }
}

module.exports = CorpseTraders;
