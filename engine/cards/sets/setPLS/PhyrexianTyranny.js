"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianTyranny extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Tyranny", "Planeshift", "PLS");
  }
}

module.exports = PhyrexianTyranny;
