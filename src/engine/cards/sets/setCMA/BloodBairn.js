"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodBairn extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Bairn", "Commander Anthology", "CMA");
  }
}

module.exports = BloodBairn;
