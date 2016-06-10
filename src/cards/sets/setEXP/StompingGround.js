"use strict";
const Constants = require ("../../../Constants");
const StompingGroundBase = require("../setGTC/StompingGround");

class StompingGround extends StompingGroundBase {
  constructor (game) {
    super(game, "Stomping Ground", "Zendikar Expedition", "EXP");
  }
}

module.exports = StompingGround;
