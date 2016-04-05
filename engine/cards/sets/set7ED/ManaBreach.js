"use strict";
const Constants = require ("../../../Constants");
const ManaBreachBase = require("../setEXO/ManaBreach");

class ManaBreach extends ManaBreachBase {
  constructor(game) {
    super(game, "Mana Breach", "Seventh Edition", "7ED");
  }
}

module.exports = ManaBreach;
