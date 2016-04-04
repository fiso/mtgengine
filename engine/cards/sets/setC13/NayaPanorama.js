"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NayaPanorama extends UnimplementedCard {
  constructor(game) {
    super(game, "Naya Panorama", "Commander 2013 Edition", "C13");
  }
}

module.exports = NayaPanorama;
