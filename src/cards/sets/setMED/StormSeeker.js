"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormSeeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Storm Seeker", "Masters Edition", "MED");
  }
}

module.exports = StormSeeker;
