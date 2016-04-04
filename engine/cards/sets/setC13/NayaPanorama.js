"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NayaPanorama extends Card {
  constructor(game) {
    super(game, "Naya Panorama", "Commander 2013 Edition", "C13");
  }
}

module.exports = NayaPanorama;
