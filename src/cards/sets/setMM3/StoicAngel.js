"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoicAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Stoic Angel", "Modern Masters 2017", "MM3");
  }
}

module.exports = StoicAngel;
