"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WorldlyTutorBase = require("../set6ED/WorldlyTutor.js");

class WorldlyTutor extends WorldlyTutorBase {
  constructor(game) {
    super(game, "Worldly Tutor", "Mirage", "MIR");
  }
}

module.exports = WorldlyTutor;
