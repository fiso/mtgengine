"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NamelessInversion extends UnimplementedCard {
  constructor (game) {
    super(game, "Nameless Inversion", "Modern Masters 2015", "MM2");
  }
}

module.exports = NamelessInversion;
