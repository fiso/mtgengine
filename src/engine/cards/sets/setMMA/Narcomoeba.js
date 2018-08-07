"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Narcomoeba extends UnimplementedCard {
  constructor (game) {
    super(game, "Narcomoeba", "Modern Masters", "MMA");
  }
}

module.exports = Narcomoeba;
