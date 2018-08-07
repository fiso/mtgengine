"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Catalog extends UnimplementedCard {
  constructor (game) {
    super(game, "Catalog", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Catalog;
