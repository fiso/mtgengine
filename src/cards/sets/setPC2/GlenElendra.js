"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlenElendra extends UnimplementedCard {
  constructor(game) {
    super(game, "Glen Elendra", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = GlenElendra;
