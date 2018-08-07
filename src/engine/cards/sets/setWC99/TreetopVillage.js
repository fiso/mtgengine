"use strict";
const Constants = require ("../../../Constants");
const TreetopVillageBase = require("../setDDU/TreetopVillage");

class TreetopVillage extends TreetopVillageBase {
  constructor (game) {
    super(game, "Treetop Village", "World Championship Decks 1999", "WC99");
  }
}

module.exports = TreetopVillage;
