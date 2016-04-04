"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TreetopVillageBase = require("../setDD3_GVL/TreetopVillage.js");

class TreetopVillage extends TreetopVillageBase {
  constructor(game) {
    super(game, "Treetop Village", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = TreetopVillage;
