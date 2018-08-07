"use strict";
const Constants = require ("../../../Constants");
const TransmutationBase = require("../setCHR/Transmutation");

class Transmutation extends TransmutationBase {
  constructor (game) {
    super(game, "Transmutation", "Legends", "LEG");
  }
}

module.exports = Transmutation;
