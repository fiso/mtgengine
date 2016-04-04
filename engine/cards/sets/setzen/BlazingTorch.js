"use strict";
const Constants = require ("../../../Constants");
const BlazingTorchBase = require("../setISD/BlazingTorch");

class BlazingTorch extends BlazingTorchBase {
  constructor(game) {
    super(game, "Blazing Torch", "Zendikar", "ZEN");
  }
}

module.exports = BlazingTorch;
