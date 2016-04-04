"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VitalSplicer extends Card {
  constructor(game) {
    super(game, "Vital Splicer", "New Phyrexia", "NPH");
  }
}

module.exports = VitalSplicer;
