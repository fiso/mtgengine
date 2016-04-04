"use strict";
const Constants = require ("../../../Constants");
const TrollAsceticBase = require("../setDDL/TrollAscetic");

class TrollAscetic extends TrollAsceticBase {
  constructor(game) {
    super(game, "Troll Ascetic", "Mirrodin", "MRD");
  }
}

module.exports = TrollAscetic;
