"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GamekeeperBase = require("../setCNS/Gamekeeper.js");

class Gamekeeper extends GamekeeperBase {
  constructor(game) {
    super(game, "Gamekeeper", "Urza's Destiny", "UDS");
  }
}

module.exports = Gamekeeper;
