"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stranglehold extends UnimplementedCard {
  constructor (game) {
    super(game, "Stranglehold", "Commander Anthology", "CMA");
  }
}

module.exports = Stranglehold;
