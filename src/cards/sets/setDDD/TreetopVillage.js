"use strict";
const Constants = require ("../../../Constants");
const TreetopVillageBase = require("../setDD3_GVL/TreetopVillage");

class TreetopVillage extends TreetopVillageBase {
  constructor (game) {
    super(game, "Treetop Village", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = TreetopVillage;
