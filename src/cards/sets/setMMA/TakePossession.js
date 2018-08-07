"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TakePossession extends UnimplementedCard {
  constructor (game) {
    super(game, "Take Possession", "Modern Masters", "MMA");
  }
}

module.exports = TakePossession;
