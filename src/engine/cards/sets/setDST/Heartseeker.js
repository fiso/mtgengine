"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Heartseeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Heartseeker", "Darksteel", "DST");
  }
}

module.exports = Heartseeker;
