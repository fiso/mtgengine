"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OblivionStrike extends Card {
  constructor(game) {
    super(game, "Oblivion Strike", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = OblivionStrike;
