"use strict";
const Constants = require ("../../../Constants");
const TorchSlingerBase = require("../setDDP/TorchSlinger");

class TorchSlinger extends TorchSlingerBase {
  constructor (game) {
    super(game, "Torch Slinger", "Zendikar", "ZEN");
  }
}

module.exports = TorchSlinger;
