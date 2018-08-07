"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreadUpon extends UnimplementedCard {
  constructor (game) {
    super(game, "Tread Upon", "Dragons of Tarkir", "DTK");
  }
}

module.exports = TreadUpon;
