"use strict";
const Constants = require ("../../../Constants");
const TorchFiendBase = require("../setDKA/TorchFiend");

class TorchFiend extends TorchFiendBase {
  constructor(game) {
    super(game, "Torch Fiend", "Magic 2015 Core Set", "M15");
  }
}

module.exports = TorchFiend;
