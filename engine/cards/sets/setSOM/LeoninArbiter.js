"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeoninArbiter extends Card {
  constructor(game) {
    super(game, "Leonin Arbiter", "Scars of Mirrodin", "SOM");
  }
}

module.exports = LeoninArbiter;
