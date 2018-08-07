"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thoughtcast extends UnimplementedCard {
  constructor (game) {
    super(game, "Thoughtcast", "Modern Masters 2015", "MM2");
  }
}

module.exports = Thoughtcast;
