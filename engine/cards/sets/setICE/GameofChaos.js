"use strict";
const Constants = require ("../../../Constants");
const GameofChaosBase = require("../set5ED/GameofChaos");

class GameofChaos extends GameofChaosBase {
  constructor(game) {
    super(game, "Game of Chaos", "Ice Age", "ICE");
  }
}

module.exports = GameofChaos;
