"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrimSamiteHealer extends UnimplementedCard {
  constructor(game) {
    super(game, "Orim, Samite Healer", "Tempest", "TMP");
  }
}

module.exports = OrimSamiteHealer;
