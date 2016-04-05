"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Orzhova extends UnimplementedCard {
  constructor(game) {
    super(game, "Orzhova", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Orzhova;
