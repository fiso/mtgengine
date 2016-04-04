"use strict";
const Constants = require ("../../../Constants");
const StormHerdBase = require("../setGPT/StormHerd");

class StormHerd extends StormHerdBase {
  constructor(game) {
    super(game, "Storm Herd", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = StormHerd;
