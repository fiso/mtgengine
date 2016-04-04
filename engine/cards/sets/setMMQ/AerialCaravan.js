"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AerialCaravan extends Card {
  constructor(game) {
    super(game, "Aerial Caravan", "Mercadian Masques", "MMQ");
  }
}

module.exports = AerialCaravan;
