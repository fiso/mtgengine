"use strict";
const Constants = require ("../../../Constants");
const HanweirGarrisonBase = require("../setEMN/HanweirGarrison");

class HanweirGarrison extends HanweirGarrisonBase {
  constructor (game) {
    super(game, "Hanweir Garrison", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = HanweirGarrison;
