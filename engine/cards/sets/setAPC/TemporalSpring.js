"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemporalSpring extends Card {
  constructor(game) {
    super(game, "Temporal Spring", "Apocalypse", "APC");
  }
}

module.exports = TemporalSpring;
