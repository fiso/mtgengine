"use strict";
const Constants = require ("../../../Constants");
const HuntedWumpusBase = require("../setBBD/HuntedWumpus");

class HuntedWumpus extends HuntedWumpusBase {
  constructor (game) {
    super(game, "Hunted Wumpus", "Mercadian Masques", "MMQ");
  }
}

module.exports = HuntedWumpus;
