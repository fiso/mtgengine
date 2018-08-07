"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BantPanorama extends UnimplementedCard {
  constructor (game) {
    super(game, "Bant Panorama", "Commander Anthology", "CMA");
  }
}

module.exports = BantPanorama;
