"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KorScythemaster extends Card {
  constructor(game) {
    super(game, "Kor Scythemaster", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = KorScythemaster;
