"use strict";
const Constants = require ("../../../Constants");
const ScourgeWolfBase = require("../setSOI/ScourgeWolf");

class ScourgeWolf extends ScourgeWolfBase {
  constructor (game) {
    super(game, "Scourge Wolf", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = ScourgeWolf;
