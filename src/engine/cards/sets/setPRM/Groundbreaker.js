"use strict";
const Constants = require ("../../../Constants");
const GroundbreakerBase = require("../setPLC/Groundbreaker");

class Groundbreaker extends GroundbreakerBase {
  constructor (game) {
    super(game, "Groundbreaker", "Magic Online Promos", "PRM");
  }
}

module.exports = Groundbreaker;
