"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThreeDreams extends UnimplementedCard {
  constructor(game) {
    super(game, "Three Dreams", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ThreeDreams;
