"use strict";
const Constants = require ("../../../Constants");
const BenevolentAncestorBase = require("../setIMA/BenevolentAncestor");

class BenevolentAncestor extends BenevolentAncestorBase {
  constructor (game) {
    super(game, "Benevolent Ancestor", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BenevolentAncestor;
