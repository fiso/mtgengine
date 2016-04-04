"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TreefolkSeedlingsBase = require("../set7ED/TreefolkSeedlings.js");

class TreefolkSeedlings extends TreefolkSeedlingsBase {
  constructor(game) {
    super(game, "Treefolk Seedlings", "Urza's Saga", "USG");
  }
}

module.exports = TreefolkSeedlings;
