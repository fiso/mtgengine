"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunkenHope extends UnimplementedCard {
  constructor(game) {
    super(game, "Sunken Hope", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = SunkenHope;
