"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScreechingHarpy extends UnimplementedCard {
  constructor(game) {
    super(game, "Screeching Harpy", "Tempest", "TMP");
  }
}

module.exports = ScreechingHarpy;
