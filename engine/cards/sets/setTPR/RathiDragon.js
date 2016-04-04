"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RathiDragonBase = require("../set9ED/RathiDragon.js");

class RathiDragon extends RathiDragonBase {
  constructor(game) {
    super(game, "Rathi Dragon", "Tempest Remastered", "TPR");
  }
}

module.exports = RathiDragon;
