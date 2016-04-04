"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TorchlingBase = require("../setDDI/Torchling.js");

class Torchling extends TorchlingBase {
  constructor(game) {
    super(game, "Torchling", "Planar Chaos", "PLC");
  }
}

module.exports = Torchling;
