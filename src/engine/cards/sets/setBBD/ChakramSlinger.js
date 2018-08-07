"use strict";
const Constants = require ("../../../Constants");
const ChakramSlingerBase = require("../setPBBD/ChakramSlinger");

class ChakramSlinger extends ChakramSlingerBase {
  constructor (game) {
    super(game, "Chakram Slinger", "Battlebond", "BBD");
  }
}

module.exports = ChakramSlinger;
