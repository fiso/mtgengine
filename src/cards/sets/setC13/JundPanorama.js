"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JundPanorama extends UnimplementedCard {
  constructor (game) {
    super(game, "Jund Panorama", "Commander 2013 Edition", "C13");
  }
}

module.exports = JundPanorama;
