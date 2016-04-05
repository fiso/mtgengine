"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisruptingShoal extends UnimplementedCard {
  constructor(game) {
    super(game, "Disrupting Shoal", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = DisruptingShoal;
