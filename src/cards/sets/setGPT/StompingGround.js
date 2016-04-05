"use strict";
const Constants = require ("../../../Constants");
const StompingGroundBase = require("../setGTC/StompingGround");

class StompingGround extends StompingGroundBase {
  constructor(game) {
    super(game, "Stomping Ground", "Guildpact", "GPT");
  }
}

module.exports = StompingGround;
