"use strict";
const Constants = require ("../../../Constants");
const TorchFiendBase = require("../setDKA/TorchFiend");

class TorchFiend extends TorchFiendBase {
  constructor(game) {
    super(game, "Torch Fiend", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = TorchFiend;
