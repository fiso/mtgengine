"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeurokSpy extends UnimplementedCard {
  constructor (game) {
    super(game, "Neurok Spy", "Mirrodin", "MRD");
  }
}

module.exports = NeurokSpy;
