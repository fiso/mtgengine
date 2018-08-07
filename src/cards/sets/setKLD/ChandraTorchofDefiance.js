"use strict";
const Constants = require ("../../../Constants");
const ChandraTorchofDefianceBase = require("../setPS18/ChandraTorchofDefiance");

class ChandraTorchofDefiance extends ChandraTorchofDefianceBase {
  constructor (game) {
    super(game, "Chandra, Torch of Defiance", "Kaladesh", "KLD");
  }
}

module.exports = ChandraTorchofDefiance;
