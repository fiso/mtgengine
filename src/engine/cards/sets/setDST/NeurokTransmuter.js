"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeurokTransmuter extends UnimplementedCard {
  constructor (game) {
    super(game, "Neurok Transmuter", "Darksteel", "DST");
  }
}

module.exports = NeurokTransmuter;
