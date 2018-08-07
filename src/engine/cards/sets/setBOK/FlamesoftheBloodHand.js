"use strict";
const Constants = require ("../../../Constants");
const FlamesoftheBloodHandBase = require("../setPD2/FlamesoftheBloodHand");

class FlamesoftheBloodHand extends FlamesoftheBloodHandBase {
  constructor (game) {
    super(game, "Flames of the Blood Hand", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = FlamesoftheBloodHand;
