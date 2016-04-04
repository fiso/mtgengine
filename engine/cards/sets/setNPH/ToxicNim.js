"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ToxicNim extends Card {
  constructor(game) {
    super(game, "Toxic Nim", "New Phyrexia", "NPH");
  }
}

module.exports = ToxicNim;
