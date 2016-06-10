"use strict";
const Constants = require ("../../../Constants");
const GroundbreakerBase = require("../setpCMP/Groundbreaker");

class Groundbreaker extends GroundbreakerBase {
  constructor (game) {
    super(game, "Groundbreaker", "Planar Chaos", "PLC");
  }
}

module.exports = Groundbreaker;
