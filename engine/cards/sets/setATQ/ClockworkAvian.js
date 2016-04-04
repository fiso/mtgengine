"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClockworkAvian extends Card {
  constructor(game) {
    super(game, "Clockwork Avian", "Antiquities", "ATQ");
  }
}

module.exports = ClockworkAvian;
