"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianAltar extends Card {
  constructor(game) {
    super(game, "Phyrexian Altar", "Invasion", "INV");
  }
}

module.exports = PhyrexianAltar;
