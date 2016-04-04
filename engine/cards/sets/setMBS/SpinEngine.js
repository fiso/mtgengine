"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpinEngine extends Card {
  constructor(game) {
    super(game, "Spin Engine", "Mirrodin Besieged", "MBS");
  }
}

module.exports = SpinEngine;
