"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BantPanorama extends UnimplementedCard {
  constructor(game) {
    super(game, "Bant Panorama", "Commander 2013 Edition", "C13");
  }
}

module.exports = BantPanorama;
