"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RapaciousOneBase = require("../setCMD/RapaciousOne.js");

class RapaciousOne extends RapaciousOneBase {
  constructor(game) {
    super(game, "Rapacious One", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RapaciousOne;
