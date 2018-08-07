"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Anger extends UnimplementedCard {
  constructor (game) {
    super(game, "Anger", "Commander Anthology", "CMA");
  }
}

module.exports = Anger;
