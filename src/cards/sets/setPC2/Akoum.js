"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Akoum extends UnimplementedCard {
  constructor (game) {
    super(game, "Akoum", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Akoum;
