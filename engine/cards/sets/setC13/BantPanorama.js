"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BantPanorama extends Card {
  constructor(game) {
    super(game, "Bant Panorama", "Commander 2013 Edition", "C13");
  }
}

module.exports = BantPanorama;
