"use strict";
const Constants = require ("../../../Constants");
const WildRicochetBase = require("../setC13/WildRicochet");

class WildRicochet extends WildRicochetBase {
  constructor(game) {
    super(game, "Wild Ricochet", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = WildRicochet;
