"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExecutionersCapsule extends Card {
  constructor(game) {
    super(game, "Executioner's Capsule", "Modern Masters", "MMA");
  }
}

module.exports = ExecutionersCapsule;
