"use strict";
const Constants = require ("../../../Constants");
const TrollAsceticBase = require("../setDDL/TrollAscetic");

class TrollAscetic extends TrollAsceticBase {
  constructor(game) {
    super(game, "Troll Ascetic", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = TrollAscetic;
