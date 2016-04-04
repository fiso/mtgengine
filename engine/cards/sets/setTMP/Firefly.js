"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Firefly extends UnimplementedCard {
  constructor(game) {
    super(game, "Firefly", "Tempest", "TMP");
  }
}

module.exports = Firefly;
