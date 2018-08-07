"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeismicMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Seismic Mage", "Mercadian Masques", "MMQ");
  }
}

module.exports = SeismicMage;
