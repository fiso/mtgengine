"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreelsCaress extends UnimplementedCard {
  constructor(game) {
    super(game, "Greel's Caress", "Prophecy", "PCY");
  }
}

module.exports = GreelsCaress;
