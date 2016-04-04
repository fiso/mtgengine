"use strict";
const Constants = require ("../../../Constants");
const PerniciousDeedBase = require("../setAPC/PerniciousDeed");

class PerniciousDeed extends PerniciousDeedBase {
  constructor(game) {
    super(game, "Pernicious Deed", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = PerniciousDeed;
