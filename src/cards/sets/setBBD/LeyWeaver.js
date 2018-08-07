"use strict";
const Constants = require ("../../../Constants");
const LeyWeaverBase = require("../setPBBD/LeyWeaver");

class LeyWeaver extends LeyWeaverBase {
  constructor (game) {
    super(game, "Ley Weaver", "Battlebond", "BBD");
  }
}

module.exports = LeyWeaver;
