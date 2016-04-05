"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeurokStealthsuit extends UnimplementedCard {
  constructor(game) {
    super(game, "Neurok Stealthsuit", "Fifth Dawn", "5DN");
  }
}

module.exports = NeurokStealthsuit;
