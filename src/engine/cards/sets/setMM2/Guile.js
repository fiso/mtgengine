"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Guile extends UnimplementedCard {
  constructor (game) {
    super(game, "Guile", "Modern Masters 2015", "MM2");
  }
}

module.exports = Guile;
