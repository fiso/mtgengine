"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodTithe extends Card {
  constructor(game) {
    super(game, "Blood Tithe", "Magic 2011", "M11");
  }
}

module.exports = BloodTithe;
