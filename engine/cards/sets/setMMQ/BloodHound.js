"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodHound extends Card {
  constructor(game) {
    super(game, "Blood Hound", "Mercadian Masques", "MMQ");
  }
}

module.exports = BloodHound;
