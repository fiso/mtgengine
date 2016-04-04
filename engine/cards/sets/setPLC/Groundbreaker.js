"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GroundbreakerBase = require("../setpCMP/Groundbreaker.js");

class Groundbreaker extends GroundbreakerBase {
  constructor(game) {
    super(game, "Groundbreaker", "Planar Chaos", "PLC");
  }
}

module.exports = Groundbreaker;
