"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Radiate extends Card {
  constructor(game) {
    super(game, "Radiate", "Torment", "TOR");
  }
}

module.exports = Radiate;
