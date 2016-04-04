"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FalloftheTitans extends Card {
  constructor(game) {
    super(game, "Fall of the Titans", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = FalloftheTitans;
