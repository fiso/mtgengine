"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CleansingBeam extends UnimplementedCard {
  constructor (game) {
    super(game, "Cleansing Beam", "Commander Anthology", "CMA");
  }
}

module.exports = CleansingBeam;
