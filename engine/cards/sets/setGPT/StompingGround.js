"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StompingGroundBase = require("../setGTC/StompingGround.js");

class StompingGround extends StompingGroundBase {
  constructor(game) {
    super(game, "Stomping Ground", "Guildpact", "GPT");
  }
}

module.exports = StompingGround;
