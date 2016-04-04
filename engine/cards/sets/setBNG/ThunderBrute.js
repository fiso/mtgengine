"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThunderBrute extends Card {
  constructor(game) {
    super(game, "Thunder Brute", "Born of the Gods", "BNG");
  }
}

module.exports = ThunderBrute;
