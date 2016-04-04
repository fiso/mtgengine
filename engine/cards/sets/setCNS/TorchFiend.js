"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TorchFiendBase = require("../setDKA/TorchFiend.js");

class TorchFiend extends TorchFiendBase {
  constructor(game) {
    super(game, "Torch Fiend", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = TorchFiend;
