"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Prophecy extends UnimplementedCard {
  constructor (game) {
    super(game, "Prophecy", "Homelands", "HML");
  }
}

module.exports = Prophecy;
