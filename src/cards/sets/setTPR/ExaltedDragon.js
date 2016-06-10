"use strict";
const Constants = require ("../../../Constants");
const ExaltedDragonBase = require("../setEXO/ExaltedDragon");

class ExaltedDragon extends ExaltedDragonBase {
  constructor (game) {
    super(game, "Exalted Dragon", "Tempest Remastered", "TPR");
  }
}

module.exports = ExaltedDragon;
