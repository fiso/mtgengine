"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianInfiltrator extends Card {
  constructor(game) {
    super(game, "Phyrexian Infiltrator", "Invasion", "INV");
  }
}

module.exports = PhyrexianInfiltrator;
