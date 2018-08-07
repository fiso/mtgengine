"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImperiousPerfect extends UnimplementedCard {
  constructor (game) {
    super(game, "Imperious Perfect", "Commander Anthology", "CMA");
  }
}

module.exports = ImperiousPerfect;
