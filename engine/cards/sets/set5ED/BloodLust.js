"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodLust extends Card {
  constructor(game) {
    super(game, "Blood Lust", "Fifth Edition", "5ED");
  }
}

module.exports = BloodLust;
