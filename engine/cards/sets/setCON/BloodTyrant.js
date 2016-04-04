"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodTyrant extends Card {
  constructor(game) {
    super(game, "Blood Tyrant", "Conflux", "CON");
  }
}

module.exports = BloodTyrant;
