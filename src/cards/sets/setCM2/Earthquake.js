"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Earthquake extends UnimplementedCard {
  constructor (game) {
    super(game, "Earthquake", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Earthquake;
