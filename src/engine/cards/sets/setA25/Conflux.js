"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Conflux extends UnimplementedCard {
  constructor (game) {
    super(game, "Conflux", "Masters 25", "A25");
  }
}

module.exports = Conflux;
