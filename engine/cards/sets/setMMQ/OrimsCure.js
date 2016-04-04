"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrimsCure extends Card {
  constructor(game) {
    super(game, "Orim's Cure", "Mercadian Masques", "MMQ");
  }
}

module.exports = OrimsCure;
