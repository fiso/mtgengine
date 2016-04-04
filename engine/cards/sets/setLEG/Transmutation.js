"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TransmutationBase = require("../setCHR/Transmutation.js");

class Transmutation extends TransmutationBase {
  constructor(game) {
    super(game, "Transmutation", "Legends", "LEG");
  }
}

module.exports = Transmutation;
