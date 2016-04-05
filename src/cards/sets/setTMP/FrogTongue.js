"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrogTongue extends UnimplementedCard {
  constructor(game) {
    super(game, "Frog Tongue", "Tempest", "TMP");
  }
}

module.exports = FrogTongue;
