"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormSeeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Storm Seeker", "Chronicles", "CHR");
  }
}

module.exports = StormSeeker;
