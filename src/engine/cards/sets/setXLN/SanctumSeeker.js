"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanctumSeeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanctum Seeker", "Ixalan", "XLN");
  }
}

module.exports = SanctumSeeker;
