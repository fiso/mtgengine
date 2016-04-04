"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TarSnare extends Card {
  constructor(game) {
    super(game, "Tar Snare", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = TarSnare;
