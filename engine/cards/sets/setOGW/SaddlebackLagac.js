"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SaddlebackLagac extends Card {
  constructor(game) {
    super(game, "Saddleback Lagac", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SaddlebackLagac;
