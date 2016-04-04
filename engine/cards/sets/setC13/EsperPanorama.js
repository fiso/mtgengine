"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EsperPanorama extends Card {
  constructor(game) {
    super(game, "Esper Panorama", "Commander 2013 Edition", "C13");
  }
}

module.exports = EsperPanorama;
