"use strict";
const Constants = require ("../../../Constants");
const KodamasReachBase = require("../setC17/KodamasReach");

class KodamasReach extends KodamasReachBase {
  constructor (game) {
    super(game, "Kodama's Reach", "Modern Masters", "MMA");
  }
}

module.exports = KodamasReach;
