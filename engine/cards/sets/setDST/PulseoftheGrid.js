"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PulseoftheGrid extends Card {
  constructor(game) {
    super(game, "Pulse of the Grid", "Darksteel", "DST");
  }
}

module.exports = PulseoftheGrid;
