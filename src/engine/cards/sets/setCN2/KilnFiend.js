"use strict";
const Constants = require ("../../../Constants");
const KilnFiendBase = require("../setIMA/KilnFiend");

class KilnFiend extends KilnFiendBase {
  constructor (game) {
    super(game, "Kiln Fiend", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = KilnFiend;
