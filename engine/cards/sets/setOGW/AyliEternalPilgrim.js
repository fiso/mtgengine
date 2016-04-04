"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AyliEternalPilgrim extends Card {
  constructor(game) {
    super(game, "Ayli, Eternal Pilgrim", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = AyliEternalPilgrim;
