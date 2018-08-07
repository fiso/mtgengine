"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MadAuntie extends UnimplementedCard {
  constructor (game) {
    super(game, "Mad Auntie", "Modern Masters", "MMA");
  }
}

module.exports = MadAuntie;
