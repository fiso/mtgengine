"use strict";
const Constants = require ("../../../Constants");
const KilnFiendBase = require("../setIMA/KilnFiend");

class KilnFiend extends KilnFiendBase {
  constructor (game) {
    super(game, "Kiln Fiend", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KilnFiend;
