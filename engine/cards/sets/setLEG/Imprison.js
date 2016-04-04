"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Imprison extends Card {
  constructor(game) {
    super(game, "Imprison", "Legends", "LEG");
  }
}

module.exports = Imprison;
