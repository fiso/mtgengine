"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Victimize extends UnimplementedCard {
  constructor (game) {
    super(game, "Victimize", "Commander Anthology", "CMA");
  }
}

module.exports = Victimize;
