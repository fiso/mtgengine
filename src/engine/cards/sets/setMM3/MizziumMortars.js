"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MizziumMortars extends UnimplementedCard {
  constructor (game) {
    super(game, "Mizzium Mortars", "Modern Masters 2017", "MM3");
  }
}

module.exports = MizziumMortars;
