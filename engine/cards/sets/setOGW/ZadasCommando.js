"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZadasCommando extends Card {
  constructor(game) {
    super(game, "Zada's Commando", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ZadasCommando;
