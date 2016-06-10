"use strict";
const Constants = require ("../../../Constants");
const KodamasReachBase = require("../setCHK/KodamasReach");

class KodamasReach extends KodamasReachBase {
  constructor (game) {
    super(game, "Kodama's Reach", "Commander 2015", "C15");
  }
}

module.exports = KodamasReach;
