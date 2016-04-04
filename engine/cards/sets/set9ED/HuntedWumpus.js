"use strict";
const Constants = require ("../../../Constants");
const HuntedWumpusBase = require("../set8ED/HuntedWumpus");

class HuntedWumpus extends HuntedWumpusBase {
  constructor(game) {
    super(game, "Hunted Wumpus", "Ninth Edition", "9ED");
  }
}

module.exports = HuntedWumpus;
