"use strict";
const Constants = require ("../../../Constants");
const GroundbreakerBase = require("../setPLC/Groundbreaker");

class Groundbreaker extends GroundbreakerBase {
  constructor (game) {
    super(game, "Groundbreaker", "Champs and States", "PCMP");
  }
}

module.exports = Groundbreaker;
