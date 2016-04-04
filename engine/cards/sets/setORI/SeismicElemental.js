"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeismicElemental extends Card {
  constructor(game) {
    super(game, "Seismic Elemental", "Magic Origins", "ORI");
  }
}

module.exports = SeismicElemental;
