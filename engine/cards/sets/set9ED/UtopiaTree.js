"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UtopiaTreeBase = require("../setINV/UtopiaTree.js");

class UtopiaTree extends UtopiaTreeBase {
  constructor(game) {
    super(game, "Utopia Tree", "Ninth Edition", "9ED");
  }
}

module.exports = UtopiaTree;
