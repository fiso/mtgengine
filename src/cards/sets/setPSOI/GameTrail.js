"use strict";
const Constants = require ("../../../Constants");
const GameTrailBase = require("../setSOI/GameTrail");

class GameTrail extends GameTrailBase {
  constructor (game) {
    super(game, "Game Trail", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = GameTrail;
