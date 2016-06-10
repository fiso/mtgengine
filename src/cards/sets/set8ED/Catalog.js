"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Catalog extends UnimplementedCard {
  constructor (game) {
    super(game, "Catalog", "Eighth Edition", "8ED");
  }
}

module.exports = Catalog;
