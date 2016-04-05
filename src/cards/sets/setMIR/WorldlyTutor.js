"use strict";
const Constants = require ("../../../Constants");
const WorldlyTutorBase = require("../set6ED/WorldlyTutor");

class WorldlyTutor extends WorldlyTutorBase {
  constructor(game) {
    super(game, "Worldly Tutor", "Mirage", "MIR");
  }
}

module.exports = WorldlyTutor;
