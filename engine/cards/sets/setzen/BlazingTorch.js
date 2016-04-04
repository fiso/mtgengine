"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlazingTorchBase = require("../setISD/BlazingTorch.js");

class BlazingTorch extends BlazingTorchBase {
  constructor(game) {
    super(game, "Blazing Torch", "Zendikar", "ZEN");
  }
}

module.exports = BlazingTorch;
