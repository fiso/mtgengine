"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScreechingSkaab extends UnimplementedCard {
  constructor(game) {
    super(game, "Screeching Skaab", "Dark Ascension", "DKA");
  }
}

module.exports = ScreechingSkaab;
