"use strict";
const Constants = require ("../../../Constants");
const WalkingBallistaBase = require("../setAER/WalkingBallista");

class WalkingBallista extends WalkingBallistaBase {
  constructor (game) {
    super(game, "Walking Ballista", "Aether Revolt Promos", "PAER");
  }
}

module.exports = WalkingBallista;
