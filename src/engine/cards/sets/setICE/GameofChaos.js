"use strict";
const Constants = require ("../../../Constants");
const GameofChaosBase = require("../setPZ2/GameofChaos");

class GameofChaos extends GameofChaosBase {
  constructor (game) {
    super(game, "Game of Chaos", "Ice Age", "ICE");
  }
}

module.exports = GameofChaos;
