"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rewind extends UnimplementedCard {
  constructor (game) {
    super(game, "Rewind", "Modern Masters 2017", "MM3");
  }
}

module.exports = Rewind;
