"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StitchersGraft extends UnimplementedCard {
  constructor (game) {
    super(game, "Stitcher's Graft", "Eldritch Moon", "EMN");
  }
}

module.exports = StitchersGraft;
