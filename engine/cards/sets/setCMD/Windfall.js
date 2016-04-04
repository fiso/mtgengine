"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindfallBase = require("../setBRB/Windfall.js");

class Windfall extends WindfallBase {
  constructor(game) {
    super(game, "Windfall", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Windfall;
