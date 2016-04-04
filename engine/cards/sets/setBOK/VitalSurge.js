"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VitalSurge extends Card {
  constructor(game) {
    super(game, "Vital Surge", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = VitalSurge;
