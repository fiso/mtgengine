"use strict";
const Constants = require ("../../../Constants");
const TorchlingBase = require("../setDDI/Torchling");

class Torchling extends TorchlingBase {
  constructor(game) {
    super(game, "Torchling", "Planar Chaos", "PLC");
  }
}

module.exports = Torchling;
