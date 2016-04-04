"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MemoryLapseBase = require("../set6ED/MemoryLapse.js");

class MemoryLapse extends MemoryLapseBase {
  constructor(game) {
    super(game, "Memory Lapse", "Fifth Edition", "5ED");
  }
}

module.exports = MemoryLapse;
