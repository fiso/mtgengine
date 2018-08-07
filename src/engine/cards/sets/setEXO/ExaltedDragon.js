"use strict";
const Constants = require ("../../../Constants");
const ExaltedDragonBase = require("../setTPR/ExaltedDragon");

class ExaltedDragon extends ExaltedDragonBase {
  constructor (game) {
    super(game, "Exalted Dragon", "Exodus", "EXO");
  }
}

module.exports = ExaltedDragon;
