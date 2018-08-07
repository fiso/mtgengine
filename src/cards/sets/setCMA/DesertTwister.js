"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesertTwister extends UnimplementedCard {
  constructor (game) {
    super(game, "Desert Twister", "Commander Anthology", "CMA");
  }
}

module.exports = DesertTwister;
