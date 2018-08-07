"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MajorTeroh extends UnimplementedCard {
  constructor (game) {
    super(game, "Major Teroh", "Torment", "TOR");
  }
}

module.exports = MajorTeroh;
