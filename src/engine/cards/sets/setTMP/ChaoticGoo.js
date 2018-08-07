"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaoticGoo extends UnimplementedCard {
  constructor (game) {
    super(game, "Chaotic Goo", "Tempest", "TMP");
  }
}

module.exports = ChaoticGoo;
