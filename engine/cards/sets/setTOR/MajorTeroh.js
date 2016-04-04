"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MajorTeroh extends Card {
  constructor(game) {
    super(game, "Major Teroh", "Torment", "TOR");
  }
}

module.exports = MajorTeroh;
