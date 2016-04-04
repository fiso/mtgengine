"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExaltedDragonBase = require("../setEXO/ExaltedDragon.js");

class ExaltedDragon extends ExaltedDragonBase {
  constructor(game) {
    super(game, "Exalted Dragon", "Tempest Remastered", "TPR");
  }
}

module.exports = ExaltedDragon;
