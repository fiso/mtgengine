"use strict";
const Constants = require ("../../../Constants");
const UtopiaTreeBase = require("../set9ED/UtopiaTree");

class UtopiaTree extends UtopiaTreeBase {
  constructor (game) {
    super(game, "Utopia Tree", "Invasion", "INV");
  }
}

module.exports = UtopiaTree;
