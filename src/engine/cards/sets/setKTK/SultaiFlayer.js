"use strict";
const Constants = require ("../../../Constants");
const SultaiFlayerBase = require("../setIMA/SultaiFlayer");

class SultaiFlayer extends SultaiFlayerBase {
  constructor (game) {
    super(game, "Sultai Flayer", "Khans of Tarkir", "KTK");
  }
}

module.exports = SultaiFlayer;
