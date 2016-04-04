"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreelsCaress extends Card {
  constructor(game) {
    super(game, "Greel's Caress", "Prophecy", "PCY");
  }
}

module.exports = GreelsCaress;
