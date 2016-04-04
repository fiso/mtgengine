"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HuntedWumpusBase = require("../set8ED/HuntedWumpus.js");

class HuntedWumpus extends HuntedWumpusBase {
  constructor(game) {
    super(game, "Hunted Wumpus", "Tenth Edition", "10E");
  }
}

module.exports = HuntedWumpus;
