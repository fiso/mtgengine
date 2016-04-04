"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindfallBase = require("../setBRB/Windfall.js");

class Windfall extends WindfallBase {
  constructor(game) {
    super(game, "Windfall", "Urza's Saga", "USG");
  }
}

module.exports = Windfall;
