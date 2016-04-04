"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErtaisMeddling extends UnimplementedCard {
  constructor(game) {
    super(game, "Ertai's Meddling", "Tempest", "TMP");
  }
}

module.exports = ErtaisMeddling;
