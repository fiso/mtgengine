"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeurokFamiliar extends UnimplementedCard {
  constructor(game) {
    super(game, "Neurok Familiar", "Mirrodin", "MRD");
  }
}

module.exports = NeurokFamiliar;
