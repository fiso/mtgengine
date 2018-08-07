"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mortiphobia extends UnimplementedCard {
  constructor (game) {
    super(game, "Mortiphobia", "Torment", "TOR");
  }
}

module.exports = Mortiphobia;
