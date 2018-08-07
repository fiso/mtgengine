"use strict";
const Constants = require ("../../../Constants");
const ReanimateBase = require("../setTPR/Reanimate");

class Reanimate extends ReanimateBase {
  constructor (game) {
    super(game, "Reanimate", "Friday Night Magic 2004", "F04");
  }
}

module.exports = Reanimate;
