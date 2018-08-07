"use strict";
const Constants = require ("../../../Constants");
const WildRicochetBase = require("../setC13/WildRicochet");

class WildRicochet extends WildRicochetBase {
  constructor (game) {
    super(game, "Wild Ricochet", "Magic 2014", "M14");
  }
}

module.exports = WildRicochet;
