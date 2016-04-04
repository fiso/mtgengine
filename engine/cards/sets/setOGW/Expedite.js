"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Expedite extends Card {
  constructor(game) {
    super(game, "Expedite", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = Expedite;
