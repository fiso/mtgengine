"use strict";
const Constants = require ("../../../Constants");
const KindredBoonBase = require("../setC17/KindredBoon");

class KindredBoon extends KindredBoonBase {
  constructor (game) {
    super(game, "Kindred Boon", "You Make the Cube", "PZ2");
  }
}

module.exports = KindredBoon;
