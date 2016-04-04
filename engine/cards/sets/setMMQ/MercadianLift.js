"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MercadianLift extends Card {
  constructor(game) {
    super(game, "Mercadian Lift", "Mercadian Masques", "MMQ");
  }
}

module.exports = MercadianLift;
