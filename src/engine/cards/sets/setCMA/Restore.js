"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Restore extends UnimplementedCard {
  constructor (game) {
    super(game, "Restore", "Commander Anthology", "CMA");
  }
}

module.exports = Restore;
