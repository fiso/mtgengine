"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianLens extends Card {
  constructor(game) {
    super(game, "Phyrexian Lens", "Invasion", "INV");
  }
}

module.exports = PhyrexianLens;
