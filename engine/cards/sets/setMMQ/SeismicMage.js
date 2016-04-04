"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeismicMage extends Card {
  constructor(game) {
    super(game, "Seismic Mage", "Mercadian Masques", "MMQ");
  }
}

module.exports = SeismicMage;
