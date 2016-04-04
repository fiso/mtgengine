"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GameofChaosBase = require("../set5ED/GameofChaos.js");

class GameofChaos extends GameofChaosBase {
  constructor(game) {
    super(game, "Game of Chaos", "Ice Age", "ICE");
  }
}

module.exports = GameofChaos;
