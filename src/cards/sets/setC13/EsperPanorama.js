"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EsperPanorama extends UnimplementedCard {
  constructor (game) {
    super(game, "Esper Panorama", "Commander 2013 Edition", "C13");
  }
}

module.exports = EsperPanorama;
