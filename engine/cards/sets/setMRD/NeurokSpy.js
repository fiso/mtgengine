"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeurokSpy extends Card {
  constructor(game) {
    super(game, "Neurok Spy", "Mirrodin", "MRD");
  }
}

module.exports = NeurokSpy;
