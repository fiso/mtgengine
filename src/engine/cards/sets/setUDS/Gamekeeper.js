"use strict";
const Constants = require ("../../../Constants");
const GamekeeperBase = require("../setC16/Gamekeeper");

class Gamekeeper extends GamekeeperBase {
  constructor (game) {
    super(game, "Gamekeeper", "Urza's Destiny", "UDS");
  }
}

module.exports = Gamekeeper;
