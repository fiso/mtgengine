"use strict";
const Constants = require ("../../../Constants");
const WildRicochetBase = require("../setC13/WildRicochet");

class WildRicochet extends WildRicochetBase {
  constructor (game) {
    super(game, "Wild Ricochet", "Commander 2011", "CMD");
  }
}

module.exports = WildRicochet;
