"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Manamorphose extends UnimplementedCard {
  constructor (game) {
    super(game, "Manamorphose", "Modern Masters", "MMA");
  }
}

module.exports = Manamorphose;
