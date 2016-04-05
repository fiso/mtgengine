"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SarkhanVol extends UnimplementedCard {
  constructor(game) {
    super(game, "Sarkhan Vol", "Modern Masters", "MMA");
  }
}

module.exports = SarkhanVol;
