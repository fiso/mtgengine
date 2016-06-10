"use strict";
const Constants = require ("../../../Constants");
const KodamasReachBase = require("../setCHK/KodamasReach");

class KodamasReach extends KodamasReachBase {
  constructor (game) {
    super(game, "Kodama's Reach", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = KodamasReach;
