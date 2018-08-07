"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Arrest extends UnimplementedCard {
  constructor (game) {
    super(game, "Arrest", "Modern Masters 2015", "MM2");
  }
}

module.exports = Arrest;
