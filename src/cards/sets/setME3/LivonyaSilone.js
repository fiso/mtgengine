"use strict";
const Constants = require ("../../../Constants");
const LivonyaSiloneBase = require("../setLEG/LivonyaSilone");

class LivonyaSilone extends LivonyaSiloneBase {
  constructor (game) {
    super(game, "Livonya Silone", "Masters Edition III", "ME3");
  }
}

module.exports = LivonyaSilone;
