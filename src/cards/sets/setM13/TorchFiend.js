"use strict";
const Constants = require ("../../../Constants");
const TorchFiendBase = require("../setM15/TorchFiend");

class TorchFiend extends TorchFiendBase {
  constructor (game) {
    super(game, "Torch Fiend", "Magic 2013", "M13");
  }
}

module.exports = TorchFiend;
