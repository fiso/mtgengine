"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SaddlebackLagac extends UnimplementedCard {
  constructor(game) {
    super(game, "Saddleback Lagac", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SaddlebackLagac;
