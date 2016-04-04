"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MemoryLapse extends Card {
  constructor(game) {
    super(game, "Memory Lapse", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MemoryLapse;
