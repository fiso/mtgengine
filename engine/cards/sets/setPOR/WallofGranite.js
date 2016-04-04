"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofGranite extends Card {
  constructor(game) {
    super(game, "Wall of Granite", "Portal", "POR");
  }
}

module.exports = WallofGranite;
