"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TorchSlingerBase = require("../setDDP/TorchSlinger.js");

class TorchSlinger extends TorchSlingerBase {
  constructor(game) {
    super(game, "Torch Slinger", "Zendikar", "ZEN");
  }
}

module.exports = TorchSlinger;
