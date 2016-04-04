"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodOath extends Card {
  constructor(game) {
    super(game, "Blood Oath", "Mercadian Masques", "MMQ");
  }
}

module.exports = BloodOath;
