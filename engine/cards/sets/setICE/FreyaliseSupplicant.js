"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreyaliseSupplicant extends UnimplementedCard {
  constructor(game) {
    super(game, "Freyalise Supplicant", "Ice Age", "ICE");
  }
}

module.exports = FreyaliseSupplicant;
