"use strict";
const Constants = require ("../../../Constants");
const NighthowlerBase = require("../setC15/Nighthowler");

class Nighthowler extends NighthowlerBase {
  constructor(game) {
    super(game, "Nighthowler", "Magic Game Day", "pMGD");
  }
}

module.exports = Nighthowler;
