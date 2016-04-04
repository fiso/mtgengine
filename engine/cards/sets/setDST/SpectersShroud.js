"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpectersShroud extends Card {
  constructor(game) {
    super(game, "Specter's Shroud", "Darksteel", "DST");
  }
}

module.exports = SpectersShroud;
