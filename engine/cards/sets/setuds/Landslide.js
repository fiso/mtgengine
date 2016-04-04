"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Landslide extends Card {
  constructor(game) {
    super(game, "Landslide", "Urza's Destiny", "UDS");
  }
}

module.exports = Landslide;
