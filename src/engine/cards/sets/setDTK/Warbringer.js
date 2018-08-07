"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Warbringer extends UnimplementedCard {
  constructor (game) {
    super(game, "Warbringer", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Warbringer;
