"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreefolkHealer extends Card {
  constructor(game) {
    super(game, "Treefolk Healer", "Invasion", "INV");
  }
}

module.exports = TreefolkHealer;
