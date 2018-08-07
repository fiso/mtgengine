"use strict";
const Constants = require ("../../../Constants");
const ManaBreachBase = require("../set7ED/ManaBreach");

class ManaBreach extends ManaBreachBase {
  constructor (game) {
    super(game, "Mana Breach", "Exodus", "EXO");
  }
}

module.exports = ManaBreach;
