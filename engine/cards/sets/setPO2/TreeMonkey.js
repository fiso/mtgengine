"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TreeMonkeyBase = require("../set9ED/TreeMonkey.js");

class TreeMonkey extends TreeMonkeyBase {
  constructor(game) {
    super(game, "Tree Monkey", "Portal Second Age", "PO2");
  }
}

module.exports = TreeMonkey;
