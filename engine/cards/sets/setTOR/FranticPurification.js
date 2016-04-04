"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FranticPurification extends Card {
  constructor(game) {
    super(game, "Frantic Purification", "Torment", "TOR");
  }
}

module.exports = FranticPurification;
