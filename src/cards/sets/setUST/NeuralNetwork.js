"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeuralNetwork extends UnimplementedCard {
  constructor (game) {
    super(game, "Neural Network", "Unstable", "UST");
  }
}

module.exports = NeuralNetwork;
