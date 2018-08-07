"use strict";
const Constants = require ("../../../Constants");
const LivonyaSiloneBase = require("../setME3/LivonyaSilone");

class LivonyaSilone extends LivonyaSiloneBase {
  constructor (game) {
    super(game, "Livonya Silone", "Legends", "LEG");
  }
}

module.exports = LivonyaSilone;
